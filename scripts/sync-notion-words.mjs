// Offline MVP substitute for a live Notion backend proxy: run this on demand
// (pnpm sync:words) to snapshot a Notion database into public/data/words.json,
// which the Angular app then fetches as a plain static file. The Notion
// token only ever lives in this Node process / .env — it never reaches
// the browser.
import { Client } from '@notionhq/client';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const DATABASE_ID = process.env.NOTION_WORDS_DATABASE_ID;

// Column names as imported from wortschatz.csv — override via .env if yours differ.
const PROPERTY_TERM = process.env.NOTION_PROP_TERM ?? 'Wort';
const PROPERTY_PLURAL = process.env.NOTION_PROP_PLURAL ?? 'Plural';
const PROPERTY_UNIT = process.env.NOTION_PROP_UNIT ?? 'Lektion';
const PROPERTY_GENDER = process.env.NOTION_PROP_GENDER ?? 'Genus';
const PROPERTY_PART_OF_SPEECH = process.env.NOTION_PROP_PART_OF_SPEECH ?? 'Wortart';
const PROPERTY_TRANSLATION = process.env.NOTION_PROP_TRANSLATION ?? 'Übersetzung';
const PROPERTY_EXAMPLE = process.env.NOTION_PROP_EXAMPLE ?? 'Beispiel';
const PROPERTY_EXAMPLE_TRANSLATION =
  process.env.NOTION_PROP_EXAMPLE_TRANSLATION ?? 'Beispiel-Übersetzung';
const PROPERTY_AUSTRIAN = process.env.NOTION_PROP_AUSTRIAN ?? 'Österreichisch';

const GENUS_TO_ARTICLE = { maskulin: 'der', feminin: 'die', sächlich: 'das' };
const ARTICLE_PREFIX = /^(der|die|das)\s+/i;

const OUTPUT_PATH = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../public/data/words.json'
);

if (!NOTION_TOKEN || !DATABASE_ID) {
  console.error(
    'Missing NOTION_TOKEN or NOTION_WORDS_DATABASE_ID.\n' +
      'Copy .env.example to .env, fill in your integration token and database id, then run again.'
  );
  process.exit(1);
}

const notion = new Client({ auth: NOTION_TOKEN });

function plainText(richText) {
  return (richText ?? []).map((fragment) => fragment.plain_text).join('');
}

/** Reads a Notion property regardless of its underlying type — CSV imports commonly leave everything as plain text. */
function readText(property) {
  if (!property) return null;

  switch (property.type) {
    case 'title':
      return plainText(property.title) || null;
    case 'rich_text':
      return plainText(property.rich_text) || null;
    case 'select':
      return property.select?.name ?? null;
    case 'multi_select':
      return property.multi_select.map((option) => option.name).join(', ') || null;
    case 'status':
      return property.status?.name ?? null;
    case 'checkbox':
      return property.checkbox ? 'Yes' : 'No';
    case 'number':
      return property.number == null ? null : String(property.number);
    default:
      return null;
  }
}

/** Notion has no "em dash" concept — CSV cells like "—" mean "not applicable". */
function readTextOrNull(property) {
  const value = readText(property);
  return value && value !== '—' ? value : null;
}

function readBoolean(property) {
  if (property?.type === 'checkbox') return property.checkbox;

  const text = readText(property)?.trim().toLowerCase();
  return text === 'yes' || text === 'true' || text === 'да';
}

function readGender(property) {
  const genus = readText(property)?.trim().toLowerCase();
  return GENUS_TO_ARTICLE[genus] ?? null;
}

function mapPageToWord(page) {
  const properties = page.properties;
  const gender = readGender(properties[PROPERTY_GENDER]);
  const rawTerm = readText(properties[PROPERTY_TERM]) ?? '';

  return {
    id: page.id,
    term: gender ? rawTerm.replace(ARTICLE_PREFIX, '') : rawTerm,
    plural: readTextOrNull(properties[PROPERTY_PLURAL]),
    gender,
    partOfSpeech: readTextOrNull(properties[PROPERTY_PART_OF_SPEECH]),
    translation: readText(properties[PROPERTY_TRANSLATION]) ?? '',
    example: readTextOrNull(properties[PROPERTY_EXAMPLE]),
    exampleTranslation: readTextOrNull(properties[PROPERTY_EXAMPLE_TRANSLATION]),
    unit: readTextOrNull(properties[PROPERTY_UNIT]),
    isAustrian: readBoolean(properties[PROPERTY_AUSTRIAN])
  };
}

/** The 2025-09 Notion API split each database into one or more data sources — rows now live behind that id, not the database id. */
async function resolveDataSourceId() {
  const database = await notion.databases.retrieve({ database_id: DATABASE_ID });
  const dataSourceId = database.data_sources[0]?.id;

  if (!dataSourceId) {
    throw new Error(`Database ${DATABASE_ID} has no data sources to query.`);
  }

  return dataSourceId;
}

async function fetchAllPages(dataSourceId) {
  const pages = [];
  let cursor;

  do {
    const response = await notion.dataSources.query({
      data_source_id: dataSourceId,
      start_cursor: cursor
    });

    pages.push(...response.results);
    cursor = response.has_more ? (response.next_cursor ?? undefined) : undefined;
  } while (cursor);

  return pages;
}

const dataSourceId = await resolveDataSourceId();
const pages = await fetchAllPages(dataSourceId);
const words = pages.map(mapPageToWord);

await mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
await writeFile(OUTPUT_PATH, JSON.stringify(words, null, 2));

console.log(`Synced ${words.length} words to ${path.relative(process.cwd(), OUTPUT_PATH)}`);

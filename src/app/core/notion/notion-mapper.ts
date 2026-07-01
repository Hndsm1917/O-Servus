import type { NotionBlock, NotionPage, NotionPropertyValue, NotionRichText } from './models/notion-api.models';
import type { NotionContentBlock, NotionPropertyPrimitive, NotionRecord } from './models/notion-view.models';

export function mapRichTextToPlainString(richText: NotionRichText[]): string {
  return richText.map((fragment) => fragment.plain_text).join('');
}

export function mapPropertyToPrimitive(property: NotionPropertyValue): NotionPropertyPrimitive {
  switch (property.type) {
    case 'title':
      return mapRichTextToPlainString(property.title);
    case 'rich_text':
      return mapRichTextToPlainString(property.rich_text);
    case 'number':
      return property.number;
    case 'select':
      return property.select?.name ?? null;
    case 'status':
      return property.status?.name ?? null;
    case 'multi_select':
      return property.multi_select.map((option) => option.name);
    case 'date':
      return property.date?.start ?? null;
    case 'checkbox':
      return property.checkbox;
    case 'url':
      return property.url;
    case 'email':
      return property.email;
    case 'phone_number':
      return property.phone_number;
    case 'files':
      return property.files.map((file) => file.file?.url ?? file.external?.url ?? '');
  }
}

export function mapPageToRecord(page: NotionPage): NotionRecord {
  const record: NotionRecord = { id: page.id, url: page.url };

  for (const [name, value] of Object.entries(page.properties)) {
    record[name] = mapPropertyToPrimitive(value);
  }

  return record;
}

export function mapBlockToContentBlock(block: NotionBlock): NotionContentBlock {
  const body = block[block.type] as { rich_text?: NotionRichText[] } | undefined;

  return {
    id: block.id,
    type: block.type,
    text: body?.rich_text ? mapRichTextToPlainString(body.rich_text) : ''
  };
}

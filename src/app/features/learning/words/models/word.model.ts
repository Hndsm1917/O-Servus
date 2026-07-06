export type WordGender = 'der' | 'die' | 'das' | null;
export type WordArticle = 'der' | 'die' | 'das' | null;

/**
 * Flattened shape written by scripts/sync-notion-words.mjs into
 * public/data/words.json — the Notion property parsing happens once at
 * sync time, not in the browser, so this is just plain JSON on the wire.
 * Field names mirror the source wortschatz.csv columns.
 */
export interface Word {
  id: string;
  term: string;
  plural: string | null;
  gender: WordGender;
  article: WordGender;
  partOfSpeech: string | null;
  translation: string;
  example: string | null;
  exampleTranslation: string | null;
  unit: string | null;
  isAustrian: boolean;
}

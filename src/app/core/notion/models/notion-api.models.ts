/**
 * Minimal typings for the slice of the Notion API (v1) this app consumes.
 * Shapes mirror https://developers.notion.com/reference so a backend proxy
 * can forward requests to api.notion.com without any translation.
 */

export interface NotionRichText {
  type: 'text' | 'mention' | 'equation';
  plain_text: string;
  href: string | null;
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
}

export type NotionPropertyValue =
  | { type: 'title'; title: NotionRichText[] }
  | { type: 'rich_text'; rich_text: NotionRichText[] }
  | { type: 'number'; number: number | null }
  | { type: 'select'; select: { name: string } | null }
  | { type: 'multi_select'; multi_select: { name: string }[] }
  | { type: 'status'; status: { name: string } | null }
  | { type: 'date'; date: { start: string; end: string | null } | null }
  | { type: 'checkbox'; checkbox: boolean }
  | { type: 'url'; url: string | null }
  | { type: 'email'; email: string | null }
  | { type: 'phone_number'; phone_number: string | null }
  | { type: 'files'; files: { name: string; file?: { url: string }; external?: { url: string } }[] };

export interface NotionPage {
  object: 'page';
  id: string;
  created_time: string;
  last_edited_time: string;
  url: string;
  properties: Record<string, NotionPropertyValue>;
}

export interface NotionDatabase {
  object: 'database';
  id: string;
  title: NotionRichText[];
  properties: Record<string, { id: string; type: NotionPropertyValue['type'] }>;
}

export type NotionBlockType =
  | 'paragraph'
  | 'heading_1'
  | 'heading_2'
  | 'heading_3'
  | 'bulleted_list_item'
  | 'numbered_list_item'
  | 'quote'
  | 'image';

export interface NotionBlock {
  object: 'block';
  id: string;
  type: NotionBlockType;
  has_children: boolean;
  [key: string]: unknown;
}

export interface NotionListResponse<T> {
  object: 'list';
  results: T[];
  next_cursor: string | null;
  has_more: boolean;
}

export interface NotionSort {
  property?: string;
  timestamp?: 'created_time' | 'last_edited_time';
  direction: 'ascending' | 'descending';
}

export interface NotionQueryDatabaseBody {
  filter?: Record<string, unknown>;
  sorts?: NotionSort[];
  start_cursor?: string;
  page_size?: number;
}

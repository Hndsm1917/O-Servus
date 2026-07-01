export type NotionPropertyPrimitive = string | number | boolean | string[] | null;

/**
 * A Notion page flattened into a plain key/value record, keyed by property
 * name, so components never need to know about Notion's property-type
 * wrapper objects.
 */
export type NotionRecord = { id: string; url: string } & Record<string, NotionPropertyPrimitive>;

export interface NotionContentBlock {
  id: string;
  type: string;
  text: string;
}

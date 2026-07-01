import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import type {
  NotionBlock,
  NotionListResponse,
  NotionPage,
  NotionQueryDatabaseBody
} from './models/notion-api.models';
import type { NotionRecord } from './models/notion-view.models';
import { mapPageToRecord } from './notion-mapper';

/**
 * Talks to a backend proxy mounted at `environment.notionApiBaseUrl` that
 * forwards requests to api.notion.com, attaching the secret token and the
 * `Notion-Version` header server-side. The Notion API can't be called
 * directly from the browser (CORS + token exposure), so no request here
 * ever carries a Notion secret.
 */
@Injectable({ providedIn: 'root' })
export class NotionService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.notionApiBaseUrl;

  queryDatabase(databaseId: string, body: NotionQueryDatabaseBody = {}): Observable<NotionListResponse<NotionPage>> {
    return this.http.post<NotionListResponse<NotionPage>>(`${this.baseUrl}/databases/${databaseId}/query`, body);
  }

  getPage(pageId: string): Observable<NotionPage> {
    return this.http.get<NotionPage>(`${this.baseUrl}/pages/${pageId}`);
  }

  getBlockChildren(blockId: string, startCursor?: string): Observable<NotionListResponse<NotionBlock>> {
    return this.http.get<NotionListResponse<NotionBlock>>(`${this.baseUrl}/blocks/${blockId}/children`, {
      params: startCursor ? { start_cursor: startCursor } : undefined
    });
  }

  /** Convenience wrapper: query a database and flatten each page into a plain record. */
  queryDatabaseRecords(databaseId: string, body: NotionQueryDatabaseBody = {}): Observable<NotionRecord[]> {
    return this.queryDatabase(databaseId, body).pipe(map((response) => response.results.map(mapPageToRecord)));
  }
}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import type { Word } from './models/word.model';

/**
 * Reads the static snapshot produced by scripts/sync-notion-words.mjs
 * (see public/data/words.json) instead of calling Notion directly — the
 * browser can't hold the Notion token, and there's no live backend proxy
 * yet. Re-run the sync script to refresh the data.
 */
@Injectable({ providedIn: 'root' })
export class WordsService {
  private readonly http = inject(HttpClient);

  getWords(): Observable<Word[]> {
    return this.http.get<Word[]>('data/words.json');
  }
}

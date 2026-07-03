import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { WordsService } from '../words.service';

@Component({
  selector: 'app-words-table',
  templateUrl: './words-table.html',
  styleUrl: './words-table.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WordsTable {
  private readonly wordsService = inject(WordsService);

  protected readonly words = toSignal(this.wordsService.getWords(), { initialValue: [] });
}

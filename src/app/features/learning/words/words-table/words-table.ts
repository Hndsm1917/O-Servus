import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { LocaleService } from '../../../../core/i18n/locale.service';
import { WordsService } from '../words.service';

@Component({
  selector: 'app-words-table',
  templateUrl: './words-table.html',
  styleUrl: './words-table.scss',
  imports: [NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WordsTable {
  private readonly wordsService = inject(WordsService);

  protected readonly locale = inject(LocaleService);
  protected readonly words = toSignal(this.wordsService.getWords(), { initialValue: [] });
}

import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';

import { LocaleService } from '../../../../core/i18n/locale.service';
import { WordsTable } from '../words-table/words-table';
import { WordsTrainer } from '../words-trainer/words-trainer';

type WordsTab = 'table' | 'trainer';

@Component({
  selector: 'app-words-page',
  imports: [WordsTable, WordsTrainer],
  templateUrl: './words-page.html',
  styleUrl: './words-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WordsPage {
  protected readonly locale = inject(LocaleService);
  protected readonly activeTab = signal<WordsTab>('table');

  protected setTab(tab: WordsTab): void {
    this.activeTab.set(tab);
  }
}

import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

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
  protected readonly activeTab = signal<WordsTab>('table');

  protected setTab(tab: WordsTab): void {
    this.activeTab.set(tab);
  }
}

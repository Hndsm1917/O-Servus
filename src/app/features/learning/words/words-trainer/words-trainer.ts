import { ChangeDetectionStrategy, Component, computed, effect, inject, signal, untracked } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { LocaleService } from '../../../../core/i18n/locale.service';
import type { Word, WordGender } from '../models/word.model';
import { WordsProgressService } from '../words-progress.service';
import { WordsService } from '../words.service';

type TrainerMode = 'translation' | 'gender';

@Component({
  selector: 'app-words-trainer',
  templateUrl: './words-trainer.html',
  styleUrl: './words-trainer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WordsTrainer {
  private readonly wordsService = inject(WordsService);
  private readonly progress = inject(WordsProgressService);

  protected readonly locale = inject(LocaleService);
  protected readonly words = toSignal(this.wordsService.getWords(), { initialValue: [] });

  protected readonly genders: WordGender[] = ['der', 'die', 'das'];
  protected readonly mode = signal<TrainerMode>('translation');
  protected readonly currentWord = signal<Word | null>(null);
  protected readonly revealed = signal(false);
  protected readonly lastAnswerCorrect = signal<boolean | null>(null);
  protected readonly score = signal({ correct: 0, total: 0 });

  // Gender mode only makes sense for nouns — everything else has gender: null.
  private readonly wordsForMode = computed(() =>
    this.mode() === 'gender' ? this.words().filter((word) => word.gender !== null) : this.words()
  );

  protected readonly totalCount = computed(() => this.wordsForMode().length);

  protected readonly availableWords = computed(() => {
    const known = this.progress.known(this.mode())();
    return this.wordsForMode().filter((word) => !known.has(word.id));
  });

  constructor() {
    // Re-pick whenever the word list loads or the mode switches. Marking a
    // word known is a deliberate advance (next()/markSelf()), so it's
    // intentionally not tracked here — only data/mode changes are.
    effect(() => {
      this.words();
      this.mode();
      untracked(() => this.pickNext());
    });
  }

  protected setMode(mode: TrainerMode): void {
    this.mode.set(mode);
  }

  protected reveal(): void {
    this.revealed.set(true);
  }

  protected guessGender(guess: WordGender): void {
    const word = this.currentWord();
    if (!word || this.revealed()) return;

    const correct = guess === word.gender;
    this.lastAnswerCorrect.set(correct);
    this.revealed.set(true);
    this.recordScore(correct);

    if (correct) this.progress.markKnown('gender', word.id);
  }

  protected markSelf(correct: boolean): void {
    const word = this.currentWord();
    this.recordScore(correct);

    if (word && correct) this.progress.markKnown('translation', word.id);

    this.next();
  }

  protected next(): void {
    this.pickNext();
  }

  protected resetProgress(): void {
    this.progress.reset(this.mode());
    this.pickNext();
  }

  private pickNext(): void {
    const pool = this.availableWords();
    const current = this.currentWord();

    let candidate = pool.length > 0 ? pool[Math.floor(Math.random() * pool.length)] : null;
    if (candidate && pool.length > 1 && candidate.id === current?.id) {
      candidate = pool[Math.floor(Math.random() * pool.length)];
    }

    this.currentWord.set(candidate);
    this.revealed.set(false);
    this.lastAnswerCorrect.set(null);
  }

  private recordScore(correct: boolean): void {
    const score = this.score();
    this.score.set({ correct: score.correct + (correct ? 1 : 0), total: score.total + 1 });
  }
}

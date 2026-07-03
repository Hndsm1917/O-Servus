import { Injectable, signal, type WritableSignal } from '@angular/core';

export type TrainerMode = 'translation' | 'gender';

const STORAGE_PREFIX = 'o-servus-words-known-';

/**
 * Tracks which words the user already knows, per trainer mode, so the
 * WordsTrainer can stop re-quizzing them. There's no backend/auth yet, so
 * this persists to localStorage — good enough for a single-device MVP.
 */
@Injectable({ providedIn: 'root' })
export class WordsProgressService {
  private readonly knownByMode: Record<TrainerMode, WritableSignal<ReadonlySet<string>>> = {
    translation: signal(this.readStored('translation')),
    gender: signal(this.readStored('gender'))
  };

  known(mode: TrainerMode): WritableSignal<ReadonlySet<string>> {
    return this.knownByMode[mode];
  }

  markKnown(mode: TrainerMode, wordId: string): void {
    const current = this.knownByMode[mode]();
    if (current.has(wordId)) return;

    const next = new Set(current);
    next.add(wordId);
    this.knownByMode[mode].set(next);
    this.persist(mode, next);
  }

  reset(mode: TrainerMode): void {
    this.knownByMode[mode].set(new Set());
    this.persist(mode, new Set());
  }

  private readStored(mode: TrainerMode): ReadonlySet<string> {
    try {
      const raw = localStorage.getItem(STORAGE_PREFIX + mode);
      return raw ? new Set(JSON.parse(raw)) : new Set();
    } catch {
      return new Set();
    }
  }

  private persist(mode: TrainerMode, ids: ReadonlySet<string>): void {
    localStorage.setItem(STORAGE_PREFIX + mode, JSON.stringify(Array.from(ids)));
  }
}

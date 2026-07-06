import { computed, Injectable, signal } from '@angular/core';

import { de } from './translations/de';
import { en } from './translations/en';
import { ru } from './translations/ru';
import type { Translations } from './translations/types';

export type Locale = 'ru' | 'en' | 'de';

const LOCALE_STORAGE_KEY = 'o-servus-locale';
const DICTIONARIES: Record<Locale, Translations> = { ru, en, de };
const SUPPORTED_LOCALES: Locale[] = ['ru', 'en', 'de'];

@Injectable({ providedIn: 'root' })
export class LocaleService {
  readonly locale = signal<Locale>(this.readStoredLocale());
  readonly t = computed(() => DICTIONARIES[this.locale()]);

  constructor() {
    this.applyLocale(this.locale());
  }

  setLocale(locale: Locale): void {
    this.locale.set(locale);
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    this.applyLocale(locale);
  }

  private applyLocale(locale: Locale): void {
    document.documentElement.setAttribute('lang', locale);
  }

  private readStoredLocale(): Locale {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (this.isSupportedLocale(stored)) return stored;

    const browserLocale =
      typeof navigator === 'object' ? navigator.language.slice(0, 2) : null;
    return this.isSupportedLocale(browserLocale) ? browserLocale : 'ru';
  }

  private isSupportedLocale(value: string | null): value is Locale {
    return value !== null && (SUPPORTED_LOCALES as string[]).includes(value);
  }
}

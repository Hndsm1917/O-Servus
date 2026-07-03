import { Injectable, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark';
export type ContrastMode = 'normal' | 'high';

const THEME_STORAGE_KEY = 'o-servus-theme';
const CONTRAST_STORAGE_KEY = 'o-servus-contrast';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly theme = signal<ThemeMode>(this.readStoredTheme());
  readonly contrast = signal<ContrastMode>(this.readStoredContrast());

  constructor() {
    this.applyTheme(this.theme());
    this.applyContrast(this.contrast());
  }

  toggleTheme(): void {
    this.setTheme(this.theme() === 'dark' ? 'light' : 'dark');
  }

  setTheme(mode: ThemeMode): void {
    this.theme.set(mode);
    localStorage.setItem(THEME_STORAGE_KEY, mode);
    this.applyTheme(mode);
  }

  toggleContrast(): void {
    this.setContrast(this.contrast() === 'high' ? 'normal' : 'high');
  }

  setContrast(mode: ContrastMode): void {
    this.contrast.set(mode);
    localStorage.setItem(CONTRAST_STORAGE_KEY, mode);
    this.applyContrast(mode);
  }

  private applyTheme(mode: ThemeMode): void {
    document.documentElement.setAttribute('data-theme', mode);
  }

  private applyContrast(mode: ContrastMode): void {
    if (mode === 'high') {
      document.documentElement.setAttribute('data-contrast', 'high');
    } else {
      document.documentElement.removeAttribute('data-contrast');
    }
  }

  private readStoredTheme(): ThemeMode {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;

    return this.matchesMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light';
  }

  private readStoredContrast(): ContrastMode {
    const stored = localStorage.getItem(CONTRAST_STORAGE_KEY);
    if (stored === 'normal' || stored === 'high') return stored;

    return this.matchesMedia('(prefers-contrast: more)') ? 'high' : 'normal';
  }

  // jsdom (unit tests) doesn't implement matchMedia — fall back to the default.
  private matchesMedia(query: string): boolean {
    return typeof window.matchMedia === 'function' && window.matchMedia(query).matches;
  }
}

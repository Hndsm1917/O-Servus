import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { LocaleService, type Locale } from '../locale.service';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageSwitcher {
  protected readonly localeService = inject(LocaleService);

  // Each language's own name is always shown in that language, never translated.
  protected readonly locales: { code: Locale; label: string }[] = [
    { code: 'ru', label: 'RU' },
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' }
  ];
}

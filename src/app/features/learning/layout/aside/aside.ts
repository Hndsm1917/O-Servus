import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { LanguageSwitcher } from '../../../../core/i18n/language-switcher/language-switcher';
import { LocaleService } from '../../../../core/i18n/locale.service';
import { ThemeService } from '../../../../core/theme/theme.service';

@Component({
  selector: 'app-aside',
  imports: [LanguageSwitcher, RouterLink, RouterLinkActive],
  templateUrl: './aside.html',
  styleUrl: './aside.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Aside {
  protected readonly locale = inject(LocaleService);
  protected readonly theme = inject(ThemeService);

  protected readonly links = computed(() => {
    const t = this.locale.t();
    return [
      { path: '/learning/words', label: t.aside.navWords },
      { path: '/learning/units', label: t.aside.navUnits },
      { path: '/learning/profile', label: t.aside.navProfile },
      { path: '/learning/roadmap', label: t.aside.navRoadmap }
    ];
  });
}

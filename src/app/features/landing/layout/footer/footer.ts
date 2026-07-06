import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { LanguageSwitcher } from '../../../../core/i18n/language-switcher/language-switcher';
import { LocaleService } from '../../../../core/i18n/locale.service';

@Component({
  selector: 'app-footer',
  imports: [LanguageSwitcher],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Footer {
  protected readonly locale = inject(LocaleService);
}

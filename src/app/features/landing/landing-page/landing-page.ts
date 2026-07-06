import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { LocaleService } from '../../../core/i18n/locale.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPage {
  protected readonly locale = inject(LocaleService);
}

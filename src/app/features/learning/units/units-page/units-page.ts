import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { LocaleService } from '../../../../core/i18n/locale.service';

@Component({
  selector: 'app-units-page',
  templateUrl: './units-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnitsPage {
  protected readonly locale = inject(LocaleService);
}

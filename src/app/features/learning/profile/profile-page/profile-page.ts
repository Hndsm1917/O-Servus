import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { LocaleService } from '../../../../core/i18n/locale.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePage {
  protected readonly locale = inject(LocaleService);
}

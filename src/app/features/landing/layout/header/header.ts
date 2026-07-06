import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { LocaleService } from '../../../../core/i18n/locale.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Header {
  protected readonly locale = inject(LocaleService);

  protected readonly links = computed(() => [{ path: '/', label: this.locale.t().header.navHome }]);
}

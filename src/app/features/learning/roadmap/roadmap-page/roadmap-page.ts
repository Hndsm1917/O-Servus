import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { LocaleService } from '../../../../core/i18n/locale.service';

@Component({
  selector: 'app-roadmap-page',
  templateUrl: './roadmap-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoadmapPage {
  protected readonly locale = inject(LocaleService);
}

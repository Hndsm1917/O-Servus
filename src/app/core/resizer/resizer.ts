import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { ResizerService } from './resizer.service';

@Component({
  selector: 'app-resizer',
  templateUrl: './resizer.html',
  styleUrl: './resizer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'hostClass()',
    '[style.fontSize.px]': 'resizer.fontSize()'
  }
})
export class Resizer {
  protected readonly resizer = inject(ResizerService);
  protected readonly showDebug = false;

  protected readonly hostClass = computed(() => `resize js-is-${this.resizer.currentConfig().name}`);

  protected readonly debugEntries = computed(() =>
    Object.entries(this.resizer.currentConfig()).map(([key, value]) => ({ key, value }))
  );
}

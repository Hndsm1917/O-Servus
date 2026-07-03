import { Component, inject, isDevMode } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DevNav } from './core/layout/dev-nav/dev-nav';
import { Resizer } from './core/resizer/resizer';
import { ThemeService } from './core/theme/theme.service';

@Component({
  selector: 'app-root',
  imports: [DevNav, Resizer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // Injected eagerly (unused) so data-theme/data-contrast are set on
  // <html> before the first paint instead of on first header interaction.
  private readonly theme = inject(ThemeService);

  protected readonly isDevMode = isDevMode();
}

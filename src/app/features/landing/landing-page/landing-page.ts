import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPage {}

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-learning-page',
  templateUrl: './learning-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LearningPage {}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Aside } from '../aside/aside';

@Component({
  selector: 'app-learning-layout',
  imports: [Aside, RouterOutlet],
  templateUrl: './learning-layout.html',
  styleUrl: './learning-layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LearningLayout {}

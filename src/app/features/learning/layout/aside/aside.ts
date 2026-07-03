import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-aside',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './aside.html',
  styleUrl: './aside.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Aside {
  protected readonly links = [
    { path: '/learning/words', label: 'Слова' },
    { path: '/learning/units', label: 'Юниты' },
    { path: '/learning/profile', label: 'Profile' },
    { path: '/learning/roadmap', label: 'Roadmap' }
  ];
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-dev-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './dev-nav.html',
  styleUrl: './dev-nav.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DevNav {
  protected readonly links = [
    { path: '/', label: 'Landing', exact: true },
    { path: '/learning', label: 'Learning', exact: false },
    { path: '/style-guide', label: 'UI Kit', exact: false }
  ];
}

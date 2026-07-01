import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Resizer } from './core/resizer/resizer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Resizer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}

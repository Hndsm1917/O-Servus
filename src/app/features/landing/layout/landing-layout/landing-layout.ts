import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Footer } from '../footer/footer';
import { Header } from '../header/header';

@Component({
  selector: 'app-landing-layout',
  imports: [Footer, Header, RouterOutlet],
  templateUrl: './landing-layout.html',
  styleUrl: './landing-layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingLayout {}

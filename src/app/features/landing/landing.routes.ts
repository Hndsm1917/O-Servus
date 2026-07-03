import { Routes } from '@angular/router';

export const LANDING_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/landing-layout/landing-layout').then((m) => m.LandingLayout),
    children: [
      {
        path: '',
        loadComponent: () => import('./landing-page/landing-page').then((m) => m.LandingPage)
      }
    ]
  }
];

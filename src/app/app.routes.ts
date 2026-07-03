import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/landing/landing.routes').then((m) => m.LANDING_ROUTES)
  },
  {
    path: 'learning',
    loadChildren: () =>
      import('./features/learning/learning.routes').then((m) => m.LEARNING_ROUTES)
  },
  {
    path: 'style-guide',
    loadComponent: () => import('./features/style-guide/style-guide').then((m) => m.StyleGuide)
  }
];

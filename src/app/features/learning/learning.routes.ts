import { Routes } from '@angular/router';

export const LEARNING_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./learning-page/learning-page').then((m) => m.LearningPage)
  }
];

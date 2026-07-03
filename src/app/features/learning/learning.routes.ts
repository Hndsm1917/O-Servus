import { Routes } from '@angular/router';

export const LEARNING_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/learning-layout/learning-layout').then((m) => m.LearningLayout),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'words' },
      {
        path: 'words',
        loadComponent: () => import('./words/words-page/words-page').then((m) => m.WordsPage)
      },
      {
        path: 'units',
        loadComponent: () => import('./units/units-page/units-page').then((m) => m.UnitsPage)
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./profile/profile-page/profile-page').then((m) => m.ProfilePage)
      },
      {
        path: 'roadmap',
        loadComponent: () =>
          import('./roadmap/roadmap-page/roadmap-page').then((m) => m.RoadmapPage)
      }
    ]
  }
];

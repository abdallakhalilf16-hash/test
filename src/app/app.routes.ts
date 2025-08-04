import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home').then((m) => m.Home),
    title: 'Home Page',
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about').then((m) => m.About),
    title: 'About Page',
  },
  {
    path: 'card',
    loadComponent: () =>
      import('./card/card').then((m) => m.Card),
    title: 'Card Page',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./components/notfound/notfound').then((m) => m.Notfound),
    title: 'Not Found',
  },
];

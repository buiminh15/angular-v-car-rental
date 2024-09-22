import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Dashbroad',
    loadComponent: () => import('./dashbroad/dashbroad.component').then(c => c.DashbroadComponent)
  },
  {
    path: 'drivers',
    title: 'Drivers',
    loadComponent: () => import('./drivers/drivers.component').then(c => c.DriversComponent)
  },
  {
    path: '**',
    title: 'Page not found!',
    loadComponent: () => import('./page-not-found/page-not-found.component').then(c => c.PageNotFoundComponent)
  }
];

import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/landing/landing.routes').then(m => m.LANDING_ROUTES)
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/Auth/auth.module').then(m => m.AuthModule)
  },
  {
  path: 'services',
  loadComponent: () =>
    import('./features/services-page/services-page.component').then(m => m.ServicesPageComponent)
},
{
    path: 'incoming-offers/:id',
    loadComponent: () =>
      import('./features/Incoming-offers/Incoming-offers.component').then(m => m.IncomingOffersComponent)
    path: 'chat',
    // canActivate: [authGuard],
    loadChildren: () =>
      import('./features/chat/chat-module').then(m => m.ChatModule)
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./Worker/dashboard/dashboard').then(m => m.Dashboard)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

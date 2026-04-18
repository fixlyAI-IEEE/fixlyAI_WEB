import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';
export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/Auth/auth.module').then(m => m.AuthModule)
  },
  
  {
    path: 'landing',
    loadChildren: () =>
      import('./features/landing/landing').then(m => m.Landing),
    canActivate: [authGuard]
  },

  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: 'auth/login'
  }
];
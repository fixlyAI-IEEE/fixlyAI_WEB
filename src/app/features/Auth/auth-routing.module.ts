import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayout } from './auth-layout/auth-layout';
const routes: Routes = [
    {
        path: '',
        component: AuthLayout,
        children: [
            {
                path: 'login',
                loadChildren: () =>
                    import('./login/login.module').then(m => m.LoginModule)
            },
            {
                path: 'register',
                loadChildren: () =>
                    import('./register/register.module').then(m => m.RegisterModule)
            },
            {
                path: 'verify-acc',
                loadComponent: () =>
                    import('./verify-acc/verify-acc').then(m => m.VerifyAcc)
            },
            {
                path: 'forget-password',
                loadComponent: () =>
                    import('./forget-password/forget-password').then(m => m.ForgetPassword)
            },
            {
                path: 'verify-otp',
                loadComponent: () =>
                    import('./verify-otp/verify-otp').then(m => m.VerifyOtp)
            },

            {
                path: 'reset-password',
                loadComponent: () =>
                    import('./reset-pass/reset-pass').then(m => m.ResetPass)
            },
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
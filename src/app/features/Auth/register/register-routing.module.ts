import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterLayout } from './register-layout/register-layout';
import { RegisterUser } from './pages/register-user/register-user';
import { RegisterTech } from './pages/register-tech/register-tech';
import { Business } from './pages/register-tech/steps/business/business';
import { Personal } from './pages/register-tech/steps/personal/personal';

const routes: Routes = [
  {
    path: '',
    component: RegisterLayout,
    children: [
      { path: '', redirectTo: 'user', pathMatch: 'full' },
      { path: 'user', component: RegisterUser },
      { path: 'tech', component: RegisterTech },

      { path: 'tech', component: RegisterTech }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule {}

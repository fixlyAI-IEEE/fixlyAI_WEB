import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Login } from './login';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: Login }]),
    Login
  ],
  declarations: []
})
export class LoginModule { }

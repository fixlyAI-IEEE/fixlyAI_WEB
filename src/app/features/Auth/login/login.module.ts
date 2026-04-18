import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Login } from './login';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@NgModule({
  imports: [
    Login,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: Login }
    ])
  ]
})
export class LoginModule {
  constructor(  private router: Router) { }

}
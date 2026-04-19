import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterLayout } from './register-layout/register-layout';
import { RegisterUser } from './pages/register-user/register-user';
import { RegisterTech } from './pages/register-tech/register-tech';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RegisterRoutingModule,
    RegisterLayout,
    RegisterUser,
    RegisterTech
  ]
})
export class RegisterModule {}
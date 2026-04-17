import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthLayout } from './auth-layout/auth-layout';

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        AuthLayout
    ],
    declarations: []
})
export class AuthModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthLayout } from './auth-layout/auth-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        AuthLayout,
        ReactiveFormsModule,
        FormsModule,
        
    ],
    declarations: []
})
export class AuthModule {
    constructor(private router: Router) { }
 }
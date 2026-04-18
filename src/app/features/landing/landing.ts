import { Component, OnInit } from '@angular/core';
import { Auth } from '../Auth/services/auth';

@Component({
  selector: 'app-landing',
  imports: [],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {

  constructor(private auth: Auth) {}

  logout() {
    this.auth.logout();
  }
}

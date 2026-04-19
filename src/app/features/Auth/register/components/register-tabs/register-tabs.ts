import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-tabs',
  imports: [],
  templateUrl: './register-tabs.html',
  styleUrl: './register-tabs.css',
})
export class RegisterTabs {
  constructor(private router: Router) { }
  goToTech() {
    this.router.navigate(['/auth/register/tech']);
  }
  goToUser() {
    this.router.navigate(['/auth/register-user']);

  }

}

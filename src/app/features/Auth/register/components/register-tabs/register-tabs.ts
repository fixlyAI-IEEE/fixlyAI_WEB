import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-register-tabs',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './register-tabs.html',
  styleUrl: './register-tabs.css',
})
export class RegisterTabs {
  constructor(private router: Router) { }
  goToTech() {
    this.router.navigate(['/auth/register/tech']);
  }
  goToUser() {
    this.router.navigate(['/auth/register/user']);

  }
  

}

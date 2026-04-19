import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { RegisterTabs } from '../components/register-tabs/register-tabs';

@Component({
  selector: 'app-register-layout',
  imports: [RouterOutlet,RegisterTabs],
  templateUrl: './register-layout.html',
  styleUrl: './register-layout.css',
})
export class RegisterLayout {

  activeTab: 'user' | 'tech' = 'user';
  currentStep = 1;

  constructor(private router: Router) {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.activeTab = e.url.includes('tech') ? 'tech' : 'user';
      }
    });
  }



  goTo(tab: 'user' | 'tech') {
    this.activeTab = tab;
    this.currentStep = 1;
    this.router.navigate(['/auth/register', tab]);
  }

  setStep(step: number) {
    this.currentStep = step;
  }

activeChild: any;

onActivate(component: any) {
  this.activeChild = component;
}

get currentStep(): number {
  return this.activeChild?.currentStep ?? 1;
}

  
}

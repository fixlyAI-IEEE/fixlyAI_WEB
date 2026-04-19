import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {
  stats = [
    { value: '98%', label: 'رضا العملاء' },
    { value: '+8K', label: 'طلب مكتمل' },
    { value: '+500', label: 'فني معتمد' },
  ];
}

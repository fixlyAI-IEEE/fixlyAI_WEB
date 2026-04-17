import { Component } from '@angular/core';
import { NavBar } from '../../component/shared/nav-bar/nav-bar';
import { HeroSection } from './hero-section/hero-section';

@Component({
  selector: 'app-landing',
  standalone: true, 
  imports: [NavBar, HeroSection],
  templateUrl: './landing.html',
  styleUrl: './landing.css'
})
export class Landing { }

import { Component } from '@angular/core';
import { NavBar } from '../../component/shared/nav-bar/nav-bar';
import { HeroSection } from './hero-section/hero-section';
import { ServicesSectionComponent } from "./services-section/services-section.component";
import { HowItWorksComponent } from "./how-it-works/how-it-works.component";
import { WorkersSectionComponent } from "./workers-section/workers-section.component";
import { ReviewsSectionComponent } from "./reviews-section/reviews-section.component";
import { ContactUsComponent } from "./Contact-us/Contact-us.component";
import { RouterOutlet } from "@angular/router";


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NavBar, HeroSection, ServicesSectionComponent, HowItWorksComponent, WorkersSectionComponent, ReviewsSectionComponent, ContactUsComponent, RouterOutlet],
  templateUrl: './landing.html',
  styleUrl: './landing.css'
})
export class Landing { 

}

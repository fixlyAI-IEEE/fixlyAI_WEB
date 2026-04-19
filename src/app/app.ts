import { Component, signal } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { NavBar } from "./component/shared/nav-bar/nav-bar";
import { Landing } from "./features/landing/landing";
import { FooterComponent } from "./component/shared/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, Landing, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('fixly_AI');
}

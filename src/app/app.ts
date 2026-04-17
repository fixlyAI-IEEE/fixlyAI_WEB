import { Component, signal } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { NavBar } from "./component/shared/nav-bar/nav-bar";
import { Landing } from "./features/landing/landing";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, Landing],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('fixly_AI');
}

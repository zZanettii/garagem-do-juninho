import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";

@Component({
  selector: 'app-home',
  imports: [Navbar],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  public clickedToHome: boolean = false;

  scrollToSection(event: string) {
    const element = document.getElementById(event)
    if (!element) return;
    element.scrollIntoView({behavior: 'smooth'})
  }
}

import { Component, EventEmitter, HostListener, inject, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { ResponsiveService } from '../../services/responsive/responsive-service';

export enum MenuItems {
  Home = 'Home',
  About = 'Sobre nós',
  Services = 'Serviços',
  AfterAndBefore = 'Antes e depois',
  Reviews = 'Depoimentos',
  FindUs = 'Onde estamos',
  Contact = 'Contato',
}

export interface MenuItem {
  label: string;
  value: string;
}

@Component({
  selector: 'app-navbar',
  imports: [MatIconModule, MatButtonModule, MatMenuModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  public readonly isMobile = inject(ResponsiveService);
  
  @Output() scrollToSection = new EventEmitter<string>();

  @Input() menuItems: MenuItem[] = [
    { label: MenuItems.Home, value: 'home' },
    { label: MenuItems.About, value: 'about' },
    { label: MenuItems.Services, value: 'services' },
    { label: MenuItems.AfterAndBefore, value: 'after-and-before' },
    { label: MenuItems.Reviews, value: 'reviews' },
    { label: MenuItems.FindUs, value: 'find-us' },
    { label: MenuItems.Contact, value: 'contact' },
  ];

  isMenuOpen: boolean = false;

  constructor() {}

  public scrollTo(section: string, menu?: MatMenu) {
    if (menu) {
      menu.closed.emit();
    }

    this.scrollToSection.emit(section);
  }
}

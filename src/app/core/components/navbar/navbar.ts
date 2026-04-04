import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

export enum MenuItems {
  Home = 'Home',
  About = 'Sobre nós',
  Contact = 'Contato',
}

export interface MenuItem {
  label: string;
  value: string;
}

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})

export class Navbar {
  @Output() scrollToSection = new EventEmitter<string>;
  
  public menuItems: MenuItem[] = [
    { label: MenuItems.Home, value: 'home' },
    { label: MenuItems.About, value: 'about' },
    { label: MenuItems.Contact, value: 'contact' },
  ];
  isMobile: boolean = false;
  isMenuOpen: boolean = false;

  

  constructor () {}

  ngOnInit() {
    this.isThisMobile();
  }

  @HostListener('window:resize')
  public isThisMobile() {
    this.isMobile = window.innerWidth < 768 ? true : false;
  }

  public scrollTo(section: string) {
    this.scrollToSection.emit(section);
  }

  public openMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }


}

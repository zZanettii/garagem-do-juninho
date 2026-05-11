import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { OurServices } from "../our-services/our-services";

@Component({
  selector: 'app-home',
  imports: [Navbar, OurServices],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  public benefits: any[] = [
    { title: '🚿 Lavagem simples', subtitle: 'Limpeza externa completa com acabamento impecável' },
    { title: '🧽 Lavagem completa', subtitle: 'Interno + externo com cuidado detalhado' },
    { title: '✨ Higienização interna', subtitle: 'Bancos, teto, painel e remoção de odores' },
    { title: '🛡️ Polimento e proteção', subtitle: 'Deixe seu carro com aspecto de novo' },
  ];
  public clickedToHome: boolean = false;

  scrollToSection(event: string) {
    const element = document.getElementById(event);
    if (!element) return;

    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  budgetWpp(){
    
  }
}

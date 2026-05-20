import { Component, inject } from '@angular/core';
import { AfterAndBefore } from '../after-and-before/after-and-before';
import { ReviewsFan } from '../reviews-fan/reviews-fan';
import { FindUs } from '../find-us/find-us';
import { Navbar } from '../navbar/navbar';
import { OurServices } from '../our-services/our-services';
import { ContactUs } from '../contact-us/contact-us';
import { Footer } from '../footer/footer';
import { WppService } from '../../services/wpp-service/wpp-service';

@Component({
  selector: 'app-home',
  imports: [Navbar, OurServices, AfterAndBefore, ReviewsFan, FindUs, ContactUs, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  private readonly wppService = inject(WppService);

  public benefits: any[] = [
    { title: '🚿 Lavagem simples', subtitle: 'Limpeza externa completa com acabamento impecável' },
    { title: '🧽 Lavagem completa', subtitle: 'Interno + externo com cuidado detalhado' },
    { title: '✨ Higienização interna', subtitle: 'Bancos, teto, painel e remoção de odores' },
  ];
  public clickedToHome: boolean = false;

  scrollToSection(event: string) {
    const element = document.getElementById(event);
    if (!element) return;

    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  budgetWpp() {
    this.wppService.openWhatsapp();
  }
}

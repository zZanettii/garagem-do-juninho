import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { WppService } from '../../services/wpp-service/wpp-service';

@Component({
  selector: 'app-contact-us',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.scss',
})
export class ContactUs {
  private readonly wppService = inject(WppService);
  
  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  openWhatsapp() {
    const name = this.form.get('name')?.value;
    this.wppService.openWhatsapp(name);
    this.form.reset();
  }

  openInstagram() {
    const url = `https://www.instagram.com/garagemdojuninho_/`;
    window.open(url, '_blank');
  }
}

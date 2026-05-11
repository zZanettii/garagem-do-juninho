import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Bubbles, CarFront, LucideAngularModule, LucideIconData, ShieldCheck, Sparkles } from 'lucide-angular';
import { ServiceData } from '../../services/service-data/service-data.service';

export interface OurJobs {
  image: string;
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-our-services',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './our-services.html',
  styleUrl: './our-services.scss',
})
export class OurServices {
  private readonly service = inject(ServiceData);
  readonly iconMap: Record<string, LucideIconData> = {
    bubbles: Bubbles,
    sparkles: Sparkles,
    shield: ShieldCheck,
    car: CarFront,
  };

  isMobile = signal(false);
  ourServices = toSignal(this.service.getOurServices(), {initialValue: [] as OurJobs[]})

  ngOnInit() {
    this.getIsMobile();
  }

  getIsMobile() {
    this.isMobile.set(window.innerWidth < 1024 ? true : false);
  }
}

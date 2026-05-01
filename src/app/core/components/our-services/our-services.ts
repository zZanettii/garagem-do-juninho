import { Component, inject } from '@angular/core';
import { ServiceData } from '../../services/service-data/service-data.service';
import { CommonModule } from '@angular/common';
import { Bubbles, CarFront, LucideAngularModule, LucideIconData, ShieldCheck, Sparkles } from 'lucide-angular';

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
  private service = inject(ServiceData);
  readonly iconMap: Record<string, LucideIconData> = {
    bubbles: Bubbles,
    sparkles: Sparkles,
    shield: ShieldCheck,
    car: CarFront,
  };

  isMobile: boolean = false;
  ourServices: OurJobs[] = [];

  ngOnInit() {
    this.isMobile = window.innerWidth < 1024 ? true : false;
    this.service.getOurServices().subscribe((data) => this.ourServices = data);
  }
}

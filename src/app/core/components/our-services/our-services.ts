import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ChangedEvent, FlickingOptions, MoveEvent, Plugin, ReadyEvent } from '@egjs/flicking';
import { AutoPlay } from '@egjs/flicking-plugins';
import { NgxFlickingComponent, NgxFlickingModule } from '@egjs/ngx-flicking';
import {
  Bubbles,
  CarFront,
  LucideAngularModule,
  LucideIconData,
  ShieldCheck,
  Sparkles,
} from 'lucide-angular';
import { ServiceData } from '../../services/service-data/service-data.service';
import { ResponsiveService } from '../../services/responsive/responsive-service';

export interface OurJobs {
  image: string;
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-our-services',
  imports: [CommonModule, LucideAngularModule, NgxFlickingModule],
  templateUrl: './our-services.html',
  styleUrl: './our-services.scss',
})
export class OurServices {
  private readonly service = inject(ServiceData);
  readonly isMobile = inject(ResponsiveService);

  readonly iconMap: Record<string, LucideIconData> = {
    bubbles: Bubbles,
    sparkles: Sparkles,
    shield: ShieldCheck,
    car: CarFront,
  };
  readonly flickingOptions: Partial<FlickingOptions> = {
    moveType: ['strict', { count: 1 }],
    circular: true,
    defaultIndex: 1,
    align: 'center',
  };

  readonly flickingPlugins: Plugin[] = [new AutoPlay()];

  readonly flickingProgress = signal(0);

  readonly activeFlickingIndex = signal(this.flickingOptions.defaultIndex ?? 0);

  ourServices = toSignal(this.service.getOurServices(), { initialValue: [] as OurJobs[] });

  onFlickingReady(event: ReadyEvent<NgxFlickingComponent>) {
    this.activeFlickingIndex.set(event.currentTarget.index);
    this.syncProgressFromFlicking(event.currentTarget);
  }

  onMove(event: MoveEvent<NgxFlickingComponent>) {
    this.syncProgressFromFlicking(event.currentTarget);
  }

  onFlickingChanged(event: ChangedEvent<NgxFlickingComponent>) {
    this.activeFlickingIndex.set(event.index);
    this.syncProgressFromFlicking(event.currentTarget);
  }

  private syncProgressFromFlicking(f: NgxFlickingComponent): void {
    const n = Math.max(this.ourServices().length || f.panelCount, 1);
    const p = f.camera.progress;
    if (!Number.isFinite(p)) {
      this.flickingProgress.set(100 / n);
      return;
    }
    const pct = ((p + 1) / n) * 100;
    this.flickingProgress.set(Math.min(100, Math.max(0, pct)));
  }
}

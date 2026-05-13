import { Component, effect, ElementRef, inject, viewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ResponsiveService } from '../../services/responsive/responsive-service';
import { ServiceData } from '../../services/service-data/service-data.service';

export interface AfterBeforeItem {
  image: string;
}

export enum AfterBeforeEnum {
  after = 'Depois',
  before = 'Antes',
}

const MOBILE_AUTOPLAY_MS = 3000;

@Component({
  selector: 'app-after-and-before',
  imports: [],
  templateUrl: './after-and-before.html',
  styleUrl: './after-and-before.scss',
})
export class AfterAndBefore {
  private readonly service = inject(ServiceData);
  readonly isMobile = inject(ResponsiveService);

  private readonly strip = viewChild<ElementRef<HTMLElement>>('strip');

  afterBeforeEnum: typeof AfterBeforeEnum = AfterBeforeEnum;

  afterBeforeItems = toSignal(this.service.getAfterBeforeItems(), {
    initialValue: [] as AfterBeforeItem[],
  });

  constructor() {
    effect((onCleanup) => {
      const mobile = this.isMobile.isMobile();
      const count = this.afterBeforeItems().length;
      if (!mobile || count < 2) {
        return;
      }
      const id = window.setInterval(() => this.advanceStrip(), MOBILE_AUTOPLAY_MS);
      onCleanup(() => clearInterval(id));
    });
  }

  private advanceStrip(): void {
    const el = this.strip()?.nativeElement;
    if (!el) return;
    const w = el.clientWidth;
    const maxScroll = el.scrollWidth - w;
    if (maxScroll <= 0) return;
    if (el.scrollLeft >= maxScroll - 2) {
      el.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      el.scrollBy({ left: w, behavior: 'smooth' });
    }
  }
}

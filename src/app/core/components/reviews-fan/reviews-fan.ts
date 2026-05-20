import { Component, effect, HostListener, inject, signal } from '@angular/core';
import { ResponsiveService } from '../../services/responsive/responsive-service';
import { ServiceData } from '../../services/service-data/service-data.service';
import { toSignal } from '@angular/core/rxjs-interop';

export interface ReviewItem {
  id: number;
  image: string;
  alt: string;
}

@Component({
  selector: 'app-reviews-fan',
  imports: [],
  templateUrl: './reviews-fan.html',
  styleUrl: './reviews-fan.scss',
})
export class ReviewsFan {
  private readonly responsive = inject(ResponsiveService);
  private readonly service = inject(ServiceData);

  reviews  = toSignal(this.service.getReviews(), { initialValue: [] as ReviewItem[] });

  readonly selectedId = signal<number | null>(null);

  constructor() {
    effect((onCleanup) => {
      document.body.style.overflow = this.selectedId() !== null ? 'hidden' : '';
      onCleanup(() => {
        document.body.style.overflow = '';
      });
    });
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close();
  }

  select(index: number): void {
    this.selectedId.set(index);
  }

  close(): void {
    this.selectedId.set(null);
  }

  hasSelection(): boolean {
    return this.selectedId() !== null;
  }

  cardTransform(index: number): string {
    const mid = (this.reviews().length - 1) / 2;
    const delta = index - mid;
    const angle = delta * this.spreadDeg();
    const scale = this.hasSelection() ? 'var(--reviews-fan-inactive-scale)' : '1';

    return `translateX(calc(-50% + ${this.offsetPx(delta)}px)) rotate(${angle}deg) scale(${scale})`;
  }

  cardZIndex(index: number): number {
    return index + 1;
  }

  private spreadDeg(): number {
    return 11;
  }

  private offsetPx(delta: number): number {
    const base = this.responsive.isMobile() ? 22 : 34;
    return Math.round(delta * base);
  }
}

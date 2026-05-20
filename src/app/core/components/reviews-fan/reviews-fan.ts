import { Component, computed, effect, HostListener, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ResponsiveService } from '../../services/responsive/responsive-service';
import { ServiceData } from '../../services/service-data/service-data.service';

export interface ReviewItem {
  id: number;
  image: string;
  alt: string;
}

export interface ReviewCardLayout {
  transform: string;
  zIndex: number;
}

@Component({
  selector: 'app-reviews-fan',
  imports: [],
  templateUrl: './reviews-fan.html',
  styleUrl: './reviews-fan.scss',
})
export class ReviewsFan {
  private readonly spreadDeg = 11;

  private readonly responsive = inject(ResponsiveService);
  private readonly service = inject(ServiceData);

  readonly reviews = toSignal(this.service.getReviews(), { initialValue: [] as ReviewItem[] });

  readonly selectedId = signal<number | null>(null);

  readonly hasSelection = computed(() => this.selectedId() !== null);

  readonly selectedReview = computed(() => {
    const index = this.selectedId();
    if (index === null) {
      return null;
    }
    return this.reviews()[index] ?? null;
  });

  readonly cardLayouts = computed<ReviewCardLayout[]>(() => {
    const items = this.reviews();
    const count = items.length;
    if (count === 0) {
      return [];
    }

    const mid = (count - 1) / 2;
    const inactiveScale = this.hasSelection() ? 'var(--reviews-fan-inactive-scale)' : '1';
    const offsetBase = this.responsive.isMobile() ? 22 : 34;

    return items.map((_, index) => {
      const delta = index - mid;
      const angle = delta * this.spreadDeg;
      const offset = Math.round(delta * offsetBase);

      return {
        transform: `translateX(calc(-50% + ${offset}px)) rotate(${angle}deg) scale(${inactiveScale})`,
        zIndex: index + 1,
      };
    });
  });

  constructor() {
    effect((onCleanup) => {
      document.body.style.overflow = this.hasSelection() ? 'hidden' : '';
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
}

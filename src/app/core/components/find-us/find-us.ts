import { Component, inject } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ResponsiveService } from '../../services/responsive/responsive-service';

@Component({
  selector: 'app-find-us',
  imports: [LucideAngularModule],
  templateUrl: './find-us.html',
  styleUrl: './find-us.scss',
})
export class FindUs {
  public readonly isMobile = inject(ResponsiveService);

  public routeMap: string =
    'https://www.google.com/maps/dir/?api=1&destination=-21.1747387,-47.7692477';

  openMap() {
    if (!this.isMobile.isMobile()) return window.open(this.routeMap, '_blank');

    return window.location.href = this.routeMap;
  }
}

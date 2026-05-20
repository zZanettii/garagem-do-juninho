import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  readonly isMobile = signal(window.innerWidth < 1025);

  constructor(){
    window.addEventListener('resize', () => {
      this.isMobile.set(window.innerWidth < 1025);
    })
  }
}

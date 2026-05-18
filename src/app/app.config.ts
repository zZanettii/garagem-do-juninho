import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { LucideAngularModule, ShieldCheck, Bubbles, Sparkle, CarFront, Map, MapPin  } from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withFetch()),
    provideRouter(routes),
    importProvidersFrom(LucideAngularModule.pick({ ShieldCheck, Bubbles, Sparkle, CarFront, Map, MapPin }))
  ]
};

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


export const appConfig: ApplicationConfig = {
<<<<<<< HEAD
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync()]
=======
  providers: [provideRouter(routes), provideClientHydration()],
>>>>>>> e3553dba364b1f6d5f46ef383fc55dd392f677e3
};

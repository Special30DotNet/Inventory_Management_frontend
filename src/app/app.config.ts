import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgxSpinnerModule } from "ngx-spinner";
import { loadingInterceptor } from '../interceptors/interceptors/loading.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideHttpClient(),
    provideAnimations(),
    provideAnimationsAsync(),
    provideToastr({ 
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true 
    }),
    BrowserAnimationsModule,
    NgxSpinnerModule,
    importProvidersFrom(
      NgxSpinnerModule.forRoot({
        // Optional: Set a default spinner type globally
        type: 'ball-scale-multiple',
      })
    ),
    provideHttpClient(
      withInterceptors([
        loadingInterceptor
      ])
    ),
  ]
};

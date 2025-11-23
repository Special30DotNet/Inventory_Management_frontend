// src/app/core/interceptors/loading.interceptor.ts

import { HttpInterceptorFn, HttpContextToken } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { inject } from '@angular/core';

// Optional: Context token to skip the loader for specific requests
export const SKIP_LOADING = new HttpContextToken<boolean>(() => false);

let requests = 0; // Global counter for active HTTP requests

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
    
    // Inject the service inside the functional interceptor
    const spinnerService = inject(NgxSpinnerService);

    // If the context explicitly asks to skip the loader, bypass the logic
    if (req.context.get(SKIP_LOADING)) {
        return next(req);
    }
    
    // 1. Show the Loader
    // Only show if this is the first active request
    if (requests === 0) {
        spinnerService.show('main-loader'); // Use the name from your shared component
    }
    requests++;

    // 2. Handle the request chain
    return next(req).pipe(
        finalize(() => {
            // 3. Decrement the request counter
            requests--;

            // 4. Hide the Loader
            // Hide only when the last request is complete
            if (requests === 0) {
                spinnerService.hide('main-loader');
            }
        })
    );
};
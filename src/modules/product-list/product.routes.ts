import { Routes } from '@angular/router';
import { ProductsDisplayComponent } from './products-display/products-display.component';

export const adminRoutes: Routes = [
  {
    path: '',
    component: ProductsDisplayComponent
  }
];
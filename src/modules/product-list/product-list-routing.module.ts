import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsDisplayComponent } from './products-display/products-display.component';

const routes: Routes = [
  { path:'', component:ProductsDisplayComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductListRoutingModule { }

import { Routes } from '@angular/router';
import { ProductlistComponent } from './pages/productlist/productlist.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { HomeComponent } from './pages/home/home.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';


export const routes: Routes = [


  { path: 'products', component: ProductlistComponent },
  { path: 'add', component: AddProductComponent },
 { path: 'edit/:id', component: AddProductComponent },
 {
path:"home",
component:HomeComponent
 },
 { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },




];

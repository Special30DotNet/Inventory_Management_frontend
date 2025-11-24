import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AgriCultureProductComponent } from './pages/agri-culture-product/agri-culture-product.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"agriculture",
        component:AgriCultureProductComponent
    }

];

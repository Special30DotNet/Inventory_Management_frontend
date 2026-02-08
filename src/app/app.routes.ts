import { Routes } from '@angular/router';
import { DashboardComponent } from './Modules/dashboard/dashboard.component';
import { SupplierListComponent } from './Modules/supplier-list/supplier-list.component';
import { ProductListComponent } from './Modules/product-list/product-list.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"dashboard",
        pathMatch:"full"
    },
    {
        path:"dashboard",
        component:DashboardComponent
    },
    {
        path:"supplier",
        component:SupplierListComponent
    },
    {
        path:"productlist",
        component:ProductListComponent
    }
];

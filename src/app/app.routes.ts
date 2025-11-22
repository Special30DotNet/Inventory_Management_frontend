import { Routes } from '@angular/router';

export const routes: Routes = [
    { path:'', loadChildren:()=> import('../modules/product-list/product-list.module').then(m=>m.ProductListModule)},
    { path:'shared', loadChildren:()=> import('../modules/shared/shared.module').then(m=>m.SharedModule)},
    { path:'admin', loadChildren:()=> import('../modules/admin/admin.module').then(m=>m.AdminModule)}
];

import { Routes } from '@angular/router';

export const routes: Routes = [
    { path:'', loadChildren:()=> import('../modules/product-list/product.routes').then(m=>m.adminRoutes)},
    { path:'shared', loadChildren:()=> import('../modules/shared/shared.module').then(m=>m.SharedModule)},
    { path:'admin', loadChildren:()=>  import('../modules/admin/admin.routes').then(m => m.adminRoutes)}
];

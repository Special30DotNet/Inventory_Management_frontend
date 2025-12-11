import { Routes } from '@angular/router';
import { AdminHeaderComponent } from '../modules/admin/admin-header/admin-header.component';

export const routes: Routes = [
    {path:'',component:AdminHeaderComponent},
    {path: 'admin', loadChildren: ()=> import('../modules/admin/admin.module').then(m=>m.AdminModule)},
    {path: 'shared', loadChildren: ()=> import('../modules/shared/shared.module').then(m=>m.SharedModule)}
];

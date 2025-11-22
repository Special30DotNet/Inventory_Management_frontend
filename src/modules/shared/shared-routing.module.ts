import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontDisplayComponent } from './front-display/front-display.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path:'',component:FrontDisplayComponent },
  { path:'login',component:LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }

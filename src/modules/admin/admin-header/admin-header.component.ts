import { Component } from '@angular/core';
import { AdminDashboardComponent } from "../admin-dashboard/admin-dashboard.component";

@Component({
  selector: 'app-admin-header',
  imports: [AdminDashboardComponent],
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.css'
})
export class AdminHeaderComponent {

}

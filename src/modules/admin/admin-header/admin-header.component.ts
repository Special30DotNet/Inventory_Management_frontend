import { Component } from '@angular/core';
import { AdminDashboardComponent } from "../admin-dashboard/admin-dashboard.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  imports: [AdminDashboardComponent, CommonModule, RouterModule],
  standalone: true,
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.css'
})
export class AdminHeaderComponent {

}

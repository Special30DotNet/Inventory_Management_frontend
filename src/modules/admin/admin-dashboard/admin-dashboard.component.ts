import { Component, signal } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AdminAddProductComponent } from "../admin-add-product/admin-add-product.component";

@Component({
  selector: 'app-admin-dashboard',
  imports: [CommonModule, AdminAddProductComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

  allProductList = signal<any>([]);
  constructor(private _productService:ProductService, private _router:Router) {}

  ngOnInit() {
    this.SubscribeGetProductList();
  }

  SubscribeGetProductList() {
    this._productService.getProductList().subscribe((list)=>{
      this.allProductList.set(list);
      console.log(list);
    });
  }

  addProduct() {
    this._router.navigate(['/admin/addProduct'])
  }
}

import { Component, signal } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AdminAddProductComponent } from "../admin-add-product/admin-add-product.component";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-dashboard',
  imports: [CommonModule, AdminAddProductComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})
export class AdminDashboardComponent {
  allProductList = signal<any>([]);
  // isShowNotification = signal<boolean>(false);
  constructor(
    private _productService: ProductService,
    private _router: Router,
    private _toastr: ToastrService
  ) {}

  ngOnInit() {
    this.allProductList = this._productService.SubscribeGetProductList();
  }

  // SubscribeGetProductList() {
  //   this._productService.loadAllProducts();
  //   this.allProductList = this._productService.products;
  // }

  addProduct() {
    this._router.navigate(['/admin/addProduct']);
  }

  deleteProduct(productId: any) {
    this._productService.deleteProduct(productId).subscribe({
      next: (del: any) => {
        this._toastr.error('Product deleted!');
        this.allProductList = this._productService.SubscribeGetProductList();
      },
      error: (err: any) => {
        console.error('Failed to delete product:', err);
        this._toastr.error('Failed to delete product!');
      },
    });
  }

}

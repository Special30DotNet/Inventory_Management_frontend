import { Component, signal } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  imports: [CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

  allProductList = signal<any>([]);
  constructor(private _productService:ProductService) {}

  ngOnInit() {
    this.SubscribeGetProductList();
  }

  SubscribeGetProductList() {
    this._productService.getProductList().subscribe((list)=>{
      this.allProductList.set(list);
      console.log(list);
    });
  }
}

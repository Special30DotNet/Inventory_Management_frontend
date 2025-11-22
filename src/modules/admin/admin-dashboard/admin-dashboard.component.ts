import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-admin-dashboard',
  imports: [],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

  constructor(private _productService:ProductService) {}

  ngOnInit() {
    this.SubscribeGetProductList();
  }

  SubscribeGetProductList() {
    this._productService.getProductList().subscribe((list)=>{
      console.log(list);
    });
  }
}

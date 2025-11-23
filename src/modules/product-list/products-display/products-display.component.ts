import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../../services/product.service';
@Component({
  selector: 'app-products-display',
  imports: [CommonModule, RouterModule, CommonModule],
  templateUrl: './products-display.component.html',
  styleUrl: './products-display.component.css'
})
export class ProductsDisplayComponent {
  
  allProductList = signal<any>([]);
  constructor(private _productService:ProductService) {}
  ngOnInit() {
    this.allProductList = this._productService.SubscribeGetProductList();
  }

  addToCart(proudct:any) {}
}

import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { ɵInternalFormsSharedModule, ReactiveFormsModule, FormBuilder } from "@angular/forms";
@Component({
  selector: 'app-products-display',
  imports: [CommonModule, RouterModule, CommonModule, ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './products-display.component.html',
  styleUrl: './products-display.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductsDisplayComponent {
  
  allProductList = signal<any>([]);
  loginForm : any;
  constructor(private _productService:ProductService, private _fb:FormBuilder) {
    this.loginForm = this._fb.group({
      userName : [''],
      password : ['']
    });
  }
  ngOnInit() {
    this.allProductList = this._productService.SubscribeGetProductList();
  }

  addToCart(proudct:any) {}

  onClickLogin() {

  }
}

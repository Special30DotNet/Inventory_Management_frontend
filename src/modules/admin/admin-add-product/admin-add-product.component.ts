import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-admin-add-product',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './admin-add-product.component.html',
  styleUrl: './admin-add-product.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminAddProductComponent {
  addProductForm:any;
  isShowNotification = signal<boolean>(false);
  constructor(private _fb:FormBuilder, private _productService:ProductService) {
    this.addProductForm = this._fb.group({
      product_name:[''],
      product_decription:[''],
      purchasePrice:[''],
      sellingPrice:[''],
      quantity:[''],
      image_url:[''],
      status:[''],
      createdDate:[''],
      created_by:[''],
      modifyDate:[''],
      modified_by:['']
    });
  }

  onSaveClick() {
    const payload = this.addProductForm.value;
    this._productService.saveProduct(payload).subscribe((response)=>{
      this.isShowNotification.set(true);
    });
    console.log(this.addProductForm.value);
  }

  closeNotification() {
    this.isShowNotification.set(false);
  }
}

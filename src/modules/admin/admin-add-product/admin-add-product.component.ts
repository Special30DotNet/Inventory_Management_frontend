import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-add-product',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './admin-add-product.component.html',
  styleUrl: './admin-add-product.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminAddProductComponent {
  addProductForm: any;
  isShowNotification = signal<boolean>(false);
  constructor(
    private _fb: FormBuilder,
    private _productService: ProductService,
    private _toastr: ToastrService
  ) {
    this.addProductForm = this._fb.group({
      product_name: [''],
      product_decription: [''],
      purchasePrice: [''],
      sellingPrice: [''],
      quantity: [''],
      image_url: [''],
      status: [''],
      createdDate: [''],
      created_by: [''],
      modifyDate: [''],
      modified_by: [''],
    });
  }

  onSaveClick() {
    const payload = this.addProductForm.value;
    this._productService.saveProduct(payload).subscribe({
      next: (response: any) => {
        this.addProduct(response);
        // this._productService.getProductList();
        this._productService.SubscribeGetProductList();
        this._toastr.success('Product saved successfully!');
      },
      error: (err: any) => {
        console.error('Failed to add product:', err);
        this._toastr.error('Failed to add product!');
      },
    });
  }

  // add product
  addProduct(product: any) {
    this._productService.products.update((old) => [...old, product]);
  }

  closeNotification() {
    this.isShowNotification.set(false);
  }
}

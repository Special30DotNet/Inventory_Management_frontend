import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../Core/Service/product-service.service';
import { CommonModule, DatePipe } from '@angular/common';
import { Product } from '../../Core/Model/productModel';
import { Observable } from 'rxjs';
declare var bootstrap: any;
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, DatePipe, ReactiveFormsModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productForm: FormGroup;
  products: any[] = [];
  editId: null | number = null;

  Counts: any = {
    productCount: 0,
    lowstock: 0,
    outofstock: 0,
    isActive: false,
  };

  constructor(private prodSrv: ProductServiceService) {
    this.productForm = new FormGroup({
      product_name: new FormControl('', Validators.required),
      purchase_price: new FormControl('', Validators.required),
      product_selling_price: new FormControl('', Validators.required),
      product_stock_quantity: new FormControl('', Validators.required),
      status: new FormControl('Available', Validators.required),
      product_decription: new FormControl(''),
      created_at: new FormControl(''),
      created_by: new FormControl(''),
      modified_at: new FormControl(''),
      modified_by: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.loadProducts();
    this.dashboardCounts();
  }

  loadProducts() {
    this.prodSrv.getallProducts().subscribe((res: any) => {
      this.products = res;
      console.log(this.products);
    });
  }

  dashboardCounts() {
    this.prodSrv.getdashboardCount().subscribe((res: any) => {
      // console.log("Dashboard Count:- ",res)
      this.Counts = res;
      console.log(this.Counts);
    });
  }

  addProducts() {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }

    const model: Product = this.productForm.value;
    model.created_at = new Date().toISOString();
    model.created_by = 'Owner';

    this.prodSrv.addProduct(model).subscribe({
      next: (res) => {
        this.productForm.reset()
        this.loadProducts();
        console.log('Product Add:', res);
        alert('Prouct Added Successfully');

      },
      error: (err) => {
        console.error('Error Add', err);
        alert('something went to wrong while adding product');
      },
    });
    console.log(this.productForm.value);
  }

  updateProduct(item: any) {
    this.editId = item.id; // example
    this.productForm.patchValue({
      product_name: item.product_name,
      purchase_price: item.purchase_price,
      product_selling_price: item.product_selling_price,
      product_stock_quantity: item.product_stock_quantity,
      product_decription: item.product_decription,
      status: item.status,
      created_at: item.created_at,
      created_by: item.created_by,
      modified_at: item.modified_at,
      modified_by: item.modified_by,
    });

    
    const modalElement = document.getElementById('editModal');
    // const modalInstance = bootstrap.Modal.getInstance(modalElement);
    const modalInstance = new bootstrap.Modal(modalElement);
    modalInstance.show();
  }

  saveUpdate() {
    if (this.editId !== null && this.productForm.valid) {
      const updatedProduct = this.productForm.value;
      this.prodSrv.updateprod(this.editId, updatedProduct).subscribe({
        next: (res) => {
          console.log('Product updated', res);
          this.loadProducts();
          this.productForm.reset({ status: '1' });
          this.editId = null;

          // Close modal
          const modalElemen = document.getElementById('editModal');
          const modalInstance = bootstrap.Modal.getInstance(modalElemen);
          modalInstance.hide();
        },
        error: (err) => console.error(err),
      });
    } else {
      console.error('Edit ID is null or form invalid');
    }
  }
  openAddModal() {
    this.editId = null;
    this.productForm.reset({ status: 'Available' });

    const modalElement = document.getElementById('editModal');
    const modalInstance = new bootstrap.Modal(modalElement);
    modalInstance.show();
  }

  deleteProduct(id:number){
    this.prodSrv.deleteProd(id).subscribe({
      next:(res)=>{
        console.log("Deleted product",res)
        alert("Product id deleted successfully")
        this.loadProducts();
      },
      error:(err)=>{
        console.error("DeleteError",err)
        alert("Error while deleting product")
      }
    })
  }
}

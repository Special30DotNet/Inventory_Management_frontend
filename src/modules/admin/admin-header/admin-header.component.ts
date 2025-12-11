import { Component } from '@angular/core';
import { ProductServicesService } from '../../../services/product-services.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms'



@Component({
  selector: 'app-admin-header',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.css'
})
export class AdminHeaderComponent {
  DeletItem: any;
  constructor(public PS: ProductServicesService, public fb: FormBuilder) { }
  List: any;
  ProductForm!: FormGroup;
  showForm: boolean = false;
  isUpdate: boolean = false

  ngOnInit() {
    this.ProductForm = this.fb.group({
      product_name: ['', Validators.required],
      id: [''],
      product_decription: ['', Validators.required],
      product_selling_price: ['', Validators.required],
      product_stock_quantity: ['', Validators.required],
      status: ['Available'],
    })
    this.getProductList();
  }


  getProductList() {
    this.PS.getProductList().subscribe(res => {
      this.List = res;
      // alert("res")
    })
  }



  onDelete(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.PS.deleteProduct(id).subscribe(res => {
          // Remove item from list
          // alert(res)
          this.List = this.List.filter((item: any) => item.id !== id);

          Swal.fire(
            'Deleted!',
            'Product has been deleted.',
            'success'
          );
        });
      }
    });
  }


  onSubmit() {

    if (this.ProductForm.valid) {
      const obj = this.ProductForm.value;

      delete obj.id;
      this.PS.addProduct(obj).subscribe({
        next: (res: any) => {
          alert("Added successfully");
          this.getProductList();
          this.ProductForm.reset();
        },
        error: (err) => {
          console.log(err);
          alert("Error adding product");
        }
      }
      )
    }
  }


  OnUpdate() {
    const id = this.ProductForm?.get('id')?.value;
    const body = this.ProductForm.value;
    // Ensure id is a number and remove it from the data sent to backend if needed
    delete body.id; // Backend already knows the ID from URL

    this.PS.updateData(id, body).subscribe({
      next: (res) => {
        console.log(res);
        alert("Updated Successfully");
        //  Swal.fire("Success", res.message, "success");
        this.getProductList();
        this.ProductForm.reset();
        this.showForm = false;
        this.isUpdate = false;
      },
      error: (err) => {
        console.log(err);
        alert("Update Failed!");
      }

    })
  }


  // edit data in table 
  OnEdit(data: any) {
    this.showForm = true;
    this.ProductForm.patchValue({
      id: data.id,
      product_name: data.product_name,
      product_decription: data.product_decription,
      product_selling_price: data.product_selling_price,
      product_stock_quantity: data.product_stock_quantity,
      status: data.status
    });
    this.isUpdate = true;
  }
}


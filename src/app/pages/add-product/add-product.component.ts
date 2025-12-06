import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductServiceService } from '../../service/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  
 productForm!: FormGroup;
  id!: number;
  isEdit = false;

  constructor(
    private fb: FormBuilder,
    private service: ProductServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {

    // Form created
   this.productForm = this.fb.group({
  product_name: ['', Validators.required],
  purchase_price: [0, Validators.required],
  product_decription: ['', Validators.required],
  product_selling_price: [0, Validators.required],
  product_stock_quantity: [0, Validators.required],
  status: ['Active', Validators.required]
});

    // get id if edit
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    if (this.id) {
      this.isEdit = true;
      this.loadProduct();
    }
  }

  // Load Old Data
  loadProduct() {
    this.service.getAllProducts().subscribe(res => {
      const product = res.find((x: any) => x.id === this.id);
      this.productForm.patchValue(product);
    });
  }

  // SAVE & UPDATE
 saveProduct() {
  const now = new Date().toISOString();

  const payload = {
    ...this.productForm.value,
    created_at: now,
    created_by: 'admin',
    modified_at: now,
    modified_by: 'admin'
  };

  if (this.isEdit) {
    this.service.updateProduct(this.id, payload).subscribe({
      next: () => {
        alert("Product updated successfully");
        this.router.navigate(['/products']);
      },
      error: err => console.error("Update error:", err)
    });
  } 
  else {
    this.service.addProduct(payload).subscribe({
      next: () => {
        alert("Product added successfully");
        this.router.navigate(['/products']);
      },
      error: err => console.error("Insert error:", err)
    });
  }
}


  goBack() {
    this.router.navigate(['/products']);
  }
}

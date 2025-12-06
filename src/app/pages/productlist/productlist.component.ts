import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../service/product-service.service';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-productlist',
  imports: [CommonModule, RouterModule],
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'] // FIXED
})
export class ProductlistComponent implements OnInit {

  products: any[] = [];

  constructor(
    private productService: ProductServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.load();
  }

  // Load all products
  load() {
    this.productService.getAllProducts().subscribe({
      next: (res: any) => this.products = res,
      error: (err) => console.error(err)
    });
  }

  // Delete a product
  deleteProduct(id: number) {
    if (confirm("Are you sure you want to delete this product?")) {
      this.productService.deleteProduct(id).subscribe({
        next: () => {
          alert("Product deleted successfully");
          // Remove from array without reloading
          this.products = this.products.filter(p => p.id !== id);
        },
        error: (err) => {
          console.error(err);
          alert("Failed to delete product");
        }
      });
    }
  }
  editProduct(id: number) {
  this.router.navigate(['/edit', id]);
}


}

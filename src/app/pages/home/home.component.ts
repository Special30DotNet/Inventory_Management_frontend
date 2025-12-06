import { Component } from '@angular/core';
import { ProductServiceService } from '../../service/product-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']  // fixed here
})
export class HomeComponent {
  products: any[] = [];

  constructor(private data: ProductServiceService) {}

  ngOnInit() {
    this.data.getAllProducts().subscribe(res => {
      console.log(res); 
      // Map backend data to template-friendly keys
      this.products = res.map((p: any) => ({
        name: p.product_name,
        description: p.product_decription,  
        price: p.product_selling_price,
        stock: p.product_stock_quantity,
        image: p.product_image ? `/assets/${p.product_image}` : 'assets/images/default.jpg'
      }));
    });
  }
}


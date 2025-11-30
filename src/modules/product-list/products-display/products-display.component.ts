import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { ɵInternalFormsSharedModule, ReactiveFormsModule, FormBuilder } from "@angular/forms";
import { UtilityService } from '../../../services/utility.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-products-display',
  imports: [
    CommonModule,
    RouterModule,
    CommonModule,
    ɵInternalFormsSharedModule,
    ReactiveFormsModule,
  ],
  templateUrl: './products-display.component.html',
  styleUrl: './products-display.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductsDisplayComponent {
  allProductList = signal<any>([]);
  loginForm: any;
  constructor(
    private _productService: ProductService,
    private _fb: FormBuilder,
    private _loginService: UtilityService,
    private _router: Router,
    private _toaster: ToastrService
  ) {
    this.loginForm = this._fb.group({
      userName: [''],
      password: [''],
    });
  }
  ngOnInit() {
    this.allProductList = this._productService.SubscribeGetProductList();
  }

  addToCart(proudct: any) {}

  onClickLogin(loginForm:any) {
    const reqBody = loginForm.value;
    this._loginService.loginAdmin(reqBody).subscribe({
      next: (response: any) => {
        if (response?.isUserVerified) {
          this._router.navigate(['admin']);
          this._toaster.success(response?.message);
        }
      },
      error:(err:any)=> {
        this._toaster.error(err);
      },
    });
  }
}

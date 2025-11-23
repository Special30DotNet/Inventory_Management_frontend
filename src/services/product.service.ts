import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { addProductToStore, deleteProduct, getProductList } from '../constant/api.constant';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // store product list
  products = signal<any[]>([]);
  constructor(private _http: HttpClient) {}

  getProductList(): Observable<any> {
    return this._http.get(`${getProductList}`);
  }

  SubscribeGetProductList() {
    this.loadAllProducts();
    return this.products;
  }

  loadAllProducts() {
    this.getProductList().subscribe((response) => {
      this.products.set(response);
    });
  }

  saveProduct(reqBody: any) {
    const url = `${addProductToStore}`;
    return this._http.post(url, reqBody, { responseType: 'text' as 'json' }).pipe(
      catchError((error) => {
        console.error('Error in add product', error);
        return throwError(() => error);
      })
    );
  }

  deleteProduct(id: any) {
    const url = `${deleteProduct}${id}`;
    return this._http.delete(url, { responseType: 'text' as 'json' }).pipe(
      catchError((error) => {
        console.error('Error in deleted product', error);
        return throwError(() => error);
      })
    );
  }
}

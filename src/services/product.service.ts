import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addProductToStore, getProductList } from '../constant/api.constant';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http:HttpClient) { }

  getProductList(): Observable<any> {
    return this._http.get(`${getProductList}`);
  }

  saveProduct(reqBody:any): Observable<any> {
    return this._http.post(`${addProductToStore}`,reqBody).pipe(
      catchError((error) => {
        console.error('Error in adding product', error);
        return throwError(error);
      }));
  }
}

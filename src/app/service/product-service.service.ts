import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

    private baseUrl = 'https://localhost:7159/api/AutomotiveProduct';

  constructor(private http: HttpClient) {}

  // CREATE Product
  addProduct(payload: any): Observable<any> {
    return this.http.post(this.baseUrl, payload);   // POST directly to controller
  }

  // GET All Products
  getAllProducts(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  // DELETE Product by ID
deleteProduct(id: number): Observable<any> {
  return this.http.delete(`${this.baseUrl}/${id}`);
}
// PUT update product
updateProduct(id: number, payload: any): Observable<any> {
  return this.http.put(`${this.baseUrl}/${id}`, payload);
}


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Model/productModel';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private apiUrl = 'https://localhost:7159/api/Medical';
  constructor(private http:HttpClient) { }

  getallProducts():Observable<any>{
    return this.http.get(`${this.apiUrl}/getall`)
  }

  getdashboardCount(){
    return this.http.get(`${this.apiUrl}/dashboard`)
  }

  addProduct(product:Product):Observable<any>{
    return this.http.post(`${this.apiUrl}`,product)
  }
  updateprod(id:number, data:any){
    return this.http.put(`${this.apiUrl}/${id}`,data)
  }

  deleteProd(id:number){
    return this.http.delete(`${this.apiUrl}/${id}`)
  }

  supplierCount(){
    return this.http.get(`${this.apiUrl}`)
  }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Supplier } from './supplier.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SupplierServiceService {

  
  private apiUrl = 'https://localhost:7159/api/Supplier';

  constructor(
    private http: HttpClient,
  ) {}

  getAll(){
    return this.http.get(`${this.apiUrl}/getall`)
  }
  getSupplierCount(){
   return this.http.get(`${this.apiUrl}/SupplierCount`);
  }

  addSupplier(data:Supplier):Observable<Supplier>{
    return this.http.post<Supplier>(`${this.apiUrl}`,data);
  }

  //search api
  searchSupplier(keyword:string):Observable<any[]>{
    const params = new HttpParams().set('keyword',keyword);
    return this.http.get<any[]>(`${this.apiUrl}/search`,{params});
  }
  

  
}

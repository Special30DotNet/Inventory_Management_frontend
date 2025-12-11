import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { deleteProduct, getProductList, addProductToStore, updateData } from '../Constant/api.constant';


@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {

  constructor(public http: HttpClient) { }



  getProductList() {
    return this.http.get(`${getProductList}`);

  }
  deleteProduct(id: number) {
    return this.http.delete(`${deleteProduct}/${id}`);

  }
  addProduct(product: any) {
    // return this.http.post(`${addProductToStore}`);
    return this.http.post(addProductToStore, product);
  }

  updateData(id: number, data: any) {
    // return this.http.put(updateData + id, data)
    return this.http.put(`${updateData}/${id}`, data, { responseType: 'text' })
  }
}


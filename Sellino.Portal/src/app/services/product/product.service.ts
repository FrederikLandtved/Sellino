import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateProductModel } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://localhost:7240';

  constructor(private http: HttpClient) { }

  CreateProduct(productModel: CreateProductModel) : Observable<number> {
    var productGroups = this.http.post<number>(this.apiUrl + '/Products', productModel);
    return productGroups;
  }
}

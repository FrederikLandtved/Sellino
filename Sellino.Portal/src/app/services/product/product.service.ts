import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateProductModel, Product } from './product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  CreateProduct(productModel: CreateProductModel) : Observable<number> {
    var productGroups = this.http.post<number>(this.apiUrl + '/Products', productModel);
    return productGroups;
  }

  GetProductsForProfile() : Observable<Product[]> {
    var products = this.http.get<Product[]>(this.apiUrl + '/Products');
    return products;
  }
}

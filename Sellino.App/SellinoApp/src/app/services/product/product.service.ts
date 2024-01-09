import { Injectable } from '@angular/core';
import { apiEndpoint } from '../apiEndpoint';
import { Observable } from 'rxjs';
import { Product } from '../product-group/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  private apiUrl = apiEndpoint;

  getProductDetails(productToken: string) {
    var products = this.http.get<Product>(this.apiUrl + '/Products/' + productToken);
    return products;
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MediaModel } from '../media/media';

@Injectable({
  providedIn: 'root'
})
export class ProductGroupService {
  private apiUrl = 'https://localhost:7240';

  //remove
  private profileToken = 'F63C6C50-920F-4619-96FD-B71982B28890';

  constructor(private http: HttpClient) { }

  getProductGroupsForProfile(): Observable<ProductGroup[]> {
    var productGroups = this.http.get<ProductGroup[]>(this.apiUrl + '/Profiles/' + this.profileToken + '/ProductGroups');
    return productGroups;
  }

  getProductsByProductGroupId(productGroupId: number): Observable<ProductGroupWithProducts> {
    var products = this.http.get<ProductGroupWithProducts>(this.apiUrl + '/ProductGroups/' + productGroupId + '/Products');
    return products;
  }

  getProductGroupsByCurrentUser(): Observable<ProductGroup[]> {
    var productGroups = this.http.get<ProductGroup[]>(this.apiUrl + '/Profile/ProductGroups');
    return productGroups;
  }
}

export interface ProductGroupWithProducts {
  ProductGroup?: ProductGroup,
  Products?: Product[]
}

export interface ProductGroup {
  ProductGroupId: number,
  ProductGroupToken: string,
  Name: string
}

export interface Product {
  ProductId: number,
  Name: string,
  Description: string,
  ProductMedia: MediaModel
}

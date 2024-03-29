import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductGroupService {
  private apiUrl = environment.apiUrl;

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

  createProductGroup(productGroupName: string): Observable<number> {
    const body = { name: productGroupName };
  
    return this.http.post<number>(this.apiUrl + '/ProductGroups', body);
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

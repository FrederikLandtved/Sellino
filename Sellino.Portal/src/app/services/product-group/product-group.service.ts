import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductGroupService {
  private apiUrl = 'https://localhost:7240';

  //remove
  private profileToken = '4130B812-79B8-4BFC-B15A-7BBAC51117A7';

  constructor(private http: HttpClient) { }

  getProductGroupsForProfile(): Observable<ProductGroup[]> {
    var productGroups = this.http.get<ProductGroup[]>(this.apiUrl + '/Profiles/' + this.profileToken + '/ProductGroups');
    return productGroups;
  }
}

export interface ProductGroup {
  ProductGroupId: number,
  ProductGroupToken: string,
  Name: string
}

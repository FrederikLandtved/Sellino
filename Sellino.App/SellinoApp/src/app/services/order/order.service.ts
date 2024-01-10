import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiEndpoint } from '../apiEndpoint';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  private apiUrl = apiEndpoint;

  createOrder(profileId: number, productId: number, amount: number, fullName: string, address: string, zipCode: number, city: string) : Observable<number> {
    let orderDetails: Order = { ProfileId: profileId, ProductId: productId, Amount: amount, FullName: fullName, Address: address, ZipCode: zipCode, City: city };

    var orderId = this.http.post<number>(this.apiUrl + '/Orders', orderDetails);

    return orderId;
  }
}

export interface Order {
  ProfileId: number,
  ProductId: number,
  Amount: number,
  FullName: string,
  Address: string,
  ZipCode: number,
  City: string
}
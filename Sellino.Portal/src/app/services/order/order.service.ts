import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  GetOrders() : Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl + '/Orders');
  }

  UpdateOrderCompleted(orderId: number) : Observable<number> {
    return this.http.put<number>(this.apiUrl + '/Orders/' + orderId, {});
  }
}

export interface Order {
  OrderId: number,
  OrderToken: string,
  ProfileId: number,
  ProductId: number,
  Amount: number,
  FullPrice: number,
  FullName: string,
  Address: string,
  ZipCode: number,
  City: string,
  IsCompleted: boolean,
  ProductName: string
}
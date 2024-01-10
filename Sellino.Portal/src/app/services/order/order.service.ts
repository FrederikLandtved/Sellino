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
  IsCompleted: boolean
}
import { Component, OnInit } from '@angular/core';
import { Order, OrderService } from 'src/app/services/order/order.service';
import { interval, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  isLoading: boolean = true;
  isLoadingMore: boolean = false;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrders();

    interval(10000).pipe(
      switchMap(() => {
        this.isLoadingMore = true;
        this.loadOrders();
        
        return timer(2000);
      })
    ).subscribe(() => {
      this.isLoadingMore = false;
    });
  }

  loadOrders() {
    this.orderService.GetOrders().subscribe(data => {
      this.orders = data;
      this.isLoading = false;
    });
  }

  updateOrderCompleted(order: Order) {
    this.orderService.UpdateOrderCompleted(order.OrderId).subscribe(data => {
      console.log(data);
      this.loadOrders();
    });
  }
}

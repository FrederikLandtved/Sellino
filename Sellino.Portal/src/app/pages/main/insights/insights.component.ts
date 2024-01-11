import { Component, OnInit } from '@angular/core';
import { Tab } from 'src/app/components/ui-kit/tab-rounded/tab-rounded.component';
import { Order, OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss']
})
export class InsightsComponent implements OnInit {
  tabs: Tab[] = [];
  orders: Order[] = [];

  totalRevenue: number = 0;
  averageOrderTotal: number = 0;
  completedOrders: number = 0;

  isLoading: boolean = true;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.tabs = [{title: 'Salg'}, { title: 'Indkøbskurv', disabled: true }, {title: 'Profilen', disabled: true}];

    this.orderService.GetOrders().subscribe(data => {
      this.orders = data;

      this.calculateTotalRevenue();
      this.calculateAverageOrder();
      this.calculateCompletedOrders();

      setTimeout(() => {
        this.isLoading = false;
      }, 1500);
    });
  }

  calculateTotalRevenue() {
    this.orders.map(x => this.totalRevenue = this.totalRevenue + x.FullPrice);
  }

  calculateAverageOrder() {
    let total: number = 0;
    this.orders.map(x => total = total + x.FullPrice);

    this.averageOrderTotal = (total / this.orders.length);
  }

  calculateCompletedOrders() {
    this.completedOrders = this.orders.filter(x => x.IsCompleted).length;
  }
}

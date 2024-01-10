import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../../services/product-group/product';
import { ProductService } from '../../services/product/product.service';
import { ProfileService } from '../../services/profile/profile.service';
import { OrderService } from '../../services/order/order.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit {
  productToken: string | null = "";
  amount: number | null = 0;
  product: Product | null = null;
  isLoading: boolean = false;
  currentProfileState: any;
  orderFulfilled: boolean = false;

  details: {Name: string, Address: string, ZipCode: number | null, City: string} = { Name: "", Address: "", ZipCode: null, City: "" };

  constructor(private location: Location, private route: ActivatedRoute, private productService: ProductService, private profileService: ProfileService, private orderService: OrderService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.productToken = params.get('productToken');
      this.amount = parseInt(params.get('amount')!);

      this.productService.getProductDetails(this.productToken!).subscribe(data => {
        this.product = data;
        this.isLoading = false;
      });

      this.currentProfileState = this.profileService.GetCurrentProfileState();
    });
  }

  createOrder() {
    let od = this.details;
    let p = this.currentProfileState.Profile;

    this.orderService.createOrder(p.ProfileId, this.product!.ProductId, this.amount!, od.Name, od.Address, od.ZipCode!, od.City).subscribe(data => {
      this.orderFulfilled = true;
    });
  }

  navigateBack() {
    this.location.back();
  }
}
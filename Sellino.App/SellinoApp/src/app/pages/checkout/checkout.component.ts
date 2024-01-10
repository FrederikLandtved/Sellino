import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../../services/product-group/product';
import { ProductService } from '../../services/product/product.service';
import { ProfileService } from '../../services/profile/profile.service';

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

  userInformation: {Name: string, Address: string, ZipCode: number | null, City: string} = { Name: "", Address: "", ZipCode: null, City: "" };

  constructor(private route: ActivatedRoute, private productService: ProductService, private profileService: ProfileService) {}

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
}
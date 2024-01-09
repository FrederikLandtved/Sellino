import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../services/product-group/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  isLoading: boolean = true;
  productToken: string | null = "";
  product: Product | null = null;

  constructor(private location: Location, private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.productToken = params.get('productToken');
      this.productService.getProductDetails(this.productToken!).subscribe(data => {
        this.product = data;
        this.isLoading = false;
      })
    });
  }

  navigateBack() {
    this.location.back();
  }
}

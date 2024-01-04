import { Component, Input, OnInit } from '@angular/core';
import { ProductGroupService, ProductGroupWithProducts } from 'src/app/services/product-group/product-group.service';

@Component({
  selector: 'product-group-horizontal',
  templateUrl: './product-group-horizontal.component.html',
  styleUrls: ['./product-group-horizontal.component.scss']
})
export class ProductGroupHorizontalComponent implements OnInit {
  @Input() productGroupId: number = 0;
  @Input() headline: String = 'Headline';

  isLoading: boolean = true;
  productGroup: ProductGroupWithProducts = {};

  constructor(private productGroupService: ProductGroupService) {}

  ngOnInit(): void {
    this.productGroupService.getProductsByProductGroupId(this.productGroupId).subscribe(data => {
      this.productGroup = data;
      this.isLoading = false;
    });
  }
}


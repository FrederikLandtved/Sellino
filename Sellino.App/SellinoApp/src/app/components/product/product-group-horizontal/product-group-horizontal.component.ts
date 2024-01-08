import { Component, Input, OnInit } from '@angular/core';
import { ProductGroupService, ProductGroupWithProducts } from '../../../services/product-group/product-group.service';

@Component({
  selector: 'product-group-horizontal',
  templateUrl: './product-group-horizontal.component.html',
  styleUrls: ['./product-group-horizontal.component.scss']
})
export class ProductGroupHorizontalComponent implements OnInit {
  @Input() productGroupId: number = 0;
  @Input() headline: String = 'Headline';
  @Input() headlineColor: string = 'black';
  @Input() loadingColor: string = 'black';

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


import { Component, Input, OnInit } from '@angular/core';
import { MediaService } from 'src/app/services/media/media.service';
import { Product, ProductGroupService, ProductGroupWithProducts } from 'src/app/services/product-group/product-group.service';

@Component({
  selector: 'product-group-horizontal',
  templateUrl: './product-group-horizontal.component.html',
  styleUrls: ['./product-group-horizontal.component.scss']
})
export class ProductGroupHorizontalComponent implements OnInit {
  @Input() productGroupId: number = 0;
  @Input() headline: String = 'Headline';
  productGroup: ProductGroupWithProducts = {};

  constructor(private productGroupService: ProductGroupService, private mediaService: MediaService) {}

  ngOnInit(): void {
    this.productGroupService.getProductsByProductGroupId(this.productGroupId).subscribe(data => {
      this.productGroup = data;
    });
  }
}


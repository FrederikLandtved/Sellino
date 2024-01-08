import { Component, Input, OnInit } from '@angular/core';
import { ProductGroupService, ProductGroupWithProducts } from '../../../services/product-group/product-group.service';

@Component({
  selector: 'product-group-grid',
  templateUrl: './product-group-grid.component.html',
  styleUrls: ['./product-group-grid.component.scss']
})
export class ProductGroupGridComponent implements OnInit  {
  @Input() productGroupId: number = 0;
  @Input() headline: string = 'Headline';
  @Input() headlineColor: string = 'black';
  @Input() itemBackgroundColor: string = '#d3d3d3';
  @Input() itemTextColor: string = 'white';
  @Input() loadingColor: string = 'black';

  productGroup: ProductGroupWithProducts = {};
  itemsToShow: any[] = [];

  isLoading: boolean = true;

  constructor(private productGroupService: ProductGroupService) {}

  ngOnInit(): void {
    this.productGroupService.getProductsByProductGroupId(this.productGroupId).subscribe(data => {
      this.productGroup = data;      
      this.itemsToShow = divideArray(this.productGroup.Products, 2);
      this.isLoading = false;
    });
  }
}

function divideArray(items: any, amountInRow: number) {
  let chunkSize = Math.ceil(amountInRow);
  let flexContainers = [];

  for (let i=0; i<items.length; i+=chunkSize) {
      flexContainers.push(items.slice(i, i+chunkSize));
  }
  
  return flexContainers;
}

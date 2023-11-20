import { Component, OnInit } from '@angular/core';
import { ProductGroup, ProductGroupService, ProductGroupWithProducts } from 'src/app/services/product-group/product-group.service';

@Component({
  selector: 'product-group-list',
  templateUrl: './product-group-list.component.html',
  styleUrls: ['./product-group-list.component.scss']
})
export class ProductGroupListComponent implements OnInit {
  productGroups: ProductGroup[] = [];
  selectedProductGroup: ProductGroupWithProducts = {};
  loadingProducts: boolean = false;
  showCreateNewProductGroup: boolean = false;
  newProductGroupName: string = "";

  constructor(private productGroupService: ProductGroupService) { }

  ngOnInit(): void {
    this.getProductGroups();
  }

  getProductGroups() {
    this.productGroupService.getProductGroupsByCurrentUser().subscribe(data => {
      this.productGroups = data;

      if(this.productGroups.length > 0){
        this.getProducts(this.productGroups[0]);
      }
    });
  }

  onSelect(productGroup: ProductGroup) {
    if(productGroup.ProductGroupId == this.selectedProductGroup.ProductGroup?.ProductGroupId){
      return;
    }

    this.selectedProductGroup.ProductGroup = productGroup;
    this.getProducts(productGroup);
  }

  getProducts(productGroup: ProductGroup) {
    this.loadingProducts = true;

    setTimeout(() => {
      this.productGroupService.getProductsByProductGroupId(productGroup.ProductGroupId).subscribe(data => {
        this.selectedProductGroup = data;
        this.loadingProducts = false;
      });
    }, 200);
  }

  createNewProductGroup() {
    if(this.newProductGroupName != ""){
      this.productGroupService.createProductGroup(this.newProductGroupName).subscribe(data => {
        this.newProductGroupName = "";
        this.showCreateNewProductGroup = false;
        this.getProductGroups();
      });
    }
  }
}

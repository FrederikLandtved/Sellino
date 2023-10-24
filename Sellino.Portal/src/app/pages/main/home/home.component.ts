import { Component, OnInit } from '@angular/core';
import { Tab } from 'src/app/interfaces/TabModel';
import { ProductGroup, ProductGroupService } from 'src/app/services/product-group/product-group.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tabs: Tab[] = [];
  currentTab: string = "";
  productGroups: ProductGroup[] = [];

  constructor(private productGroupService: ProductGroupService) {

  }
  ngOnInit(): void {
    this.tabs = [{title: 'Produkter'}, { title: 'Produktgrupper' }];
    this.getProductGroups();
  }

  onTabClick(tab: Tab) {
    this.currentTab = tab.title;
  }

  getProductGroups() {
    return;
    this.productGroupService.getProductGroupsForProfile().subscribe(data => this.productGroups = data);
  }
}

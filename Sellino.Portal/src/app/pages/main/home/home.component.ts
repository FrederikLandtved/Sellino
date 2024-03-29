import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from 'src/app/services/product/product';
import { Tab } from 'src/app/components/ui-kit/tab-rounded/tab-rounded.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tabs: Tab[] = [];
  currentTab: string = "";
  productList: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.tabs = [{title: 'Produkter'}, { title: 'Produktgrupper' }];

    this.productService.GetProductsForProfile().subscribe(data => {
      this.productList = data;
    });
  }

  onTabClick(tab: Tab) {
    this.currentTab = tab.title;
  }
}

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

  products2 = [
    {title: "New Balance 530", bgColor:'#0062F8', profileImg:'data:image/png;base64,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', textColor: 'white', size: "Nyhed!", img: "https://content.rezetstore.dk/sites/default/files/styles/product_display_mobile/public/PIM-images/new-balance/2312439/new-balance-530ab-white-2312439-v1-799170.png"},
    {title: "Air Force 1", textColor: 'black', size: "", img: "https://content.rezetstore.dk/sites/default/files/styles/product_display_mobile/public/PIM-images/new-balance/2278851/new-balance-1500gbi-brown-2278851-v1-775616.png"},
    {title: "T-shirt", bgColor:'#3a85cf', textColor: 'white', profileImg:'https://static.wixstatic.com/media/3b6e9e_1999adc3eb4e4d54ba331214d0acc052~mv2.jpg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3b6e9e_1999adc3eb4e4d54ba331214d0acc052~mv2.jpg', size: "👔 Elendig Software", img: "https://content.rezetstore.dk/sites/default/files/styles/product_display_mobile/public/PIM-images/new-balance/2312307/new-balance-2002ref-incense-2312307-v1-788050.png"},
    {title: "Langærmet t-shirt", textColor: 'black', size: "Infinity Action", img: "https://content.rezetstore.dk/sites/default/files/styles/product_display_mobile/public/PIM-images/new-balance/2330001/new-balance-480ltc-white-2330001-v1-781876.png"}
  ]

}


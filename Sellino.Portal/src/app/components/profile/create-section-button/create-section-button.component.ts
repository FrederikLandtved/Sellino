import { Component } from '@angular/core';
import { ProductGroup, ProductGroupService } from 'src/app/services/product-group/product-group.service';
import { DropdownOption } from '../../ui-kit/dropdown/dropdown.component';

@Component({
  selector: 'create-section-button',
  templateUrl: './create-section-button.component.html',
  styleUrls: ['./create-section-button.component.scss']
})
export class CreateSectionButtonComponent {
  createStep: CreateSectionStep = CreateSectionStep.Start;
  productGroupOptions: DropdownOption[] = [];

  constructor(private productGroupService: ProductGroupService) {}

  changeStep(newStep: number){
    if(this.createStep == 0){
      this.createStep = newStep;
    }
  }

  onProductGroupClick() {
    this.createStep = CreateSectionStep.ProductGroup;
    this.productGroupService.getProductGroupsForProfile().subscribe((data) => {
      // Map each ProductGroup to a DropdownOption
      this.productGroupOptions = data.map((productGroup) => ({
        Id: productGroup.ProductGroupId,
        Title: productGroup.Name,
      }));
    });
  }
}

enum CreateSectionStep {
  Start = 0,
  ChooseType = 1,
  Image = 3,
  ProductGroup = 4
}
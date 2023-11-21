import { Component, EventEmitter, Output } from '@angular/core';
import { ProductGroup, ProductGroupService } from 'src/app/services/product-group/product-group.service';
import { DropdownOption } from '../../ui-kit/dropdown/dropdown.component';
import { ProfilePageSectionModel } from 'src/app/services/profile/profile-page.service';

@Component({
  selector: 'create-section-button',
  templateUrl: './create-section-button.component.html',
  styleUrls: ['./create-section-button.component.scss']
})
export class CreateSectionButtonComponent {
  createStep: CreateSectionStep = CreateSectionStep.Start;
  productGroupOptions: DropdownOption[] = [];
  createSectionModel: ProfilePageSectionModel = { Name: "", ProfilePageSectionId: 0, ProfilePageSectionType: 0, DataId: 0, SortIndex: 0 };
  @Output() onSubmit = new EventEmitter<ProfilePageSectionModel>();

  constructor(private productGroupService: ProductGroupService) {}

  changeStep(newStep: number){
    if(this.createStep == 0){
      this.createStep = newStep;
    }
  }

  onProductGroupClick(isHorisontal: boolean) {
    this.createStep = CreateSectionStep.ProductGroup;
    this.setSectionType(isHorisontal ? 1 : 2);

    this.productGroupService.getProductGroupsByCurrentUser().subscribe((data) => {
      // Map each ProductGroup to a DropdownOption
      this.productGroupOptions = data.map((productGroup) => ({
        Id: productGroup.ProductGroupId,
        Title: productGroup.Name,
      }));
    });
  }

  onProductGroupChange(productGroupId: number) {
    this.createSectionModel.DataId = productGroupId;
    console.log(this.createSectionModel);
    
  }

  onImageClick() {
    this.createStep = CreateSectionStep.Image;
  }

  onSubmitNewSection() {
    this.onSubmit.emit(this.createSectionModel);
  }

  setSectionType(typeId: number){
    switch (typeId) {
      // Horisontal product group
      case 1:
        this.createSectionModel.ProfilePageSectionType = 1;
        break;
      
      // Grid product group
      case 2:
        this.createSectionModel.ProfilePageSectionType = 2;
        break;

      default: 1
        break;
    }
  }
}

enum CreateSectionStep {
  Start = 0,
  ChooseType = 1,
  Image = 3,
  ProductGroup = 4
}
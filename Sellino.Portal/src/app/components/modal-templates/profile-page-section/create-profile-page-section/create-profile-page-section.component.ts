import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DropdownOption } from 'src/app/components/ui-kit/dropdown/dropdown.component';
import { ProductGroupService } from 'src/app/services/product-group/product-group.service';
import { ProfilePageSectionModel, ProfilePageService, ProfilePageWithSectionsModel } from 'src/app/services/profile/profile-page.service';

@Component({
  selector: 'app-create-profile-page-section',
  templateUrl: './create-profile-page-section.component.html',
  styleUrls: ['./create-profile-page-section.component.scss']
})
export class CreateProfilePageSectionComponent implements OnInit {
  profile: ProfilePageWithSectionsModel | null = null;
  productGroupsOptions: DropdownOption[] = [];
  createSectionModel: ProfilePageSectionModel = { Name: "", ProfilePageSectionId: 0, ProfilePageSectionType: 0, DataId: 0, SortIndex: 0 };
  textEditor: string = '';

  constructor(private dialog: MatDialogRef<CreateProfilePageSectionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private productGroupService: ProductGroupService, private profilePageService: ProfilePageService) {}


  ngOnInit(): void {
    this.profile = this.data.profile;
    this.getProductGroups();
  }

  getProductGroups() {
    this.productGroupService.getProductGroupsByCurrentUser().subscribe(productGroups => {
      productGroups.forEach(pg => {
        var option: DropdownOption = { Id: pg.ProductGroupId, Title: pg.Name };
        this.productGroupsOptions.push(option);
      });
    });
  }

  onSelectSectionType(sectionTypeId: number) {
    this.createSectionModel.ProfilePageSectionType = sectionTypeId;
  }

  onCloseDialog() {
    this.dialog.close();
  }

  onCreateNewSection(model: ProfilePageSectionModel, item: ProfilePageWithSectionsModel) {    
    this.profilePageService.CreatePageSection(model, item).subscribe(data => {
      console.log(data);
    });
  }

  onSubmit() {
    this.onCreateNewSection(this.createSectionModel, this.profile!);
    this.dialog.close(this.profile);
  }
}

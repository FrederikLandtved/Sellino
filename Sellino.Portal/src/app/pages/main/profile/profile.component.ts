import { Component, OnInit } from '@angular/core';
import { Tab } from 'src/app/interfaces/TabModel';
import { ProfileModel } from 'src/app/services/profile/profile';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  tabs: Tab[] = [];
  currentTab: string = "";
  showCreateDialog: boolean = true;
  profileModel: ProfileModel = {Name: '', Bio: 'Test', CompanyHexColor: '', DarkCompanyHexColor: '', TextOnCompanyHexColor: '', SecondaryCompanyHexColor: '', TextOnSecondaryCompanyHexColor: ''};

  constructor(private profileService: ProfileService, private themeService: ThemeService) {}

  ngOnInit(): void {
    this.tabs = [{title: 'Farver'}, { title: 'Profilen' }, {title: 'Tekster'}, {title: 'Mediefiler'}, {title: 'Returret'}, { title: 'Betaling' }];
    this.getProfileForEditing();
  }

  onTabClick(tab: Tab) {
    this.currentTab = tab.title;
  }

  getProfileForEditing() {
    this.profileService.GetProfileForEdit().subscribe(data => {
      this.profileModel = data;
    });
  }

  onSubmitUpdate() {
    this.profileService.UpdateProfile(this.profileModel)
      .subscribe(data => {
        console.log(data);
        this.themeService.UpdateColorTheme(this.profileModel.CompanyHexColor, this.profileModel.TextOnCompanyHexColor, this.profileModel.DarkCompanyHexColor, this.profileModel.SecondaryCompanyHexColor, this.profileModel.TextOnSecondaryCompanyHexColor);
        sessionStorage.setItem("profile", JSON.stringify(this.profileModel));
      });
  }
}
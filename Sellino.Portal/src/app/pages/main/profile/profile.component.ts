import { Component, OnInit } from '@angular/core';
import { Tab } from 'src/app/components/ui-kit/tab-rounded/tab-rounded.component';
import { ProfileModel } from 'src/app/services/profile/profile';
import { ProfilePageModel, ProfilePageService, ProfilePageWithSectionsModel } from 'src/app/services/profile/profile-page.service';
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
  profileModel: ProfileModel = {Name: '', Bio: 'Test', CompanyHexColor: '', DarkCompanyHexColor: '', TextOnCompanyHexColor: '', SecondaryCompanyHexColor: '', TextOnSecondaryCompanyHexColor: '', TextOnDarkCompanyHexColor: '', ProfileMediaId: 0, CoverMediaId: 0};
  profilePages: ProfilePageWithSectionsModel[] = [];
  isLoadingUpdate: boolean = false;
  isLoadingProfile: boolean = true;
  selectedPage: ProfilePageWithSectionsModel | null = null;

  constructor(private profileService: ProfileService, private themeService: ThemeService, private profilePageService: ProfilePageService) {}

  ngOnInit(): void {
    this.tabs = [ { title: 'Sider' }, {title: 'Farver'}, {title: 'Billeder'}, {title: 'Tekster'}];
    this.getProfileForEditing();
  }

  onTabClick(tab: Tab) {
    this.currentTab = tab.title;
  }

  getProfileForEditing() {
    this.isLoadingProfile = true;
    this.isLoadingUpdate = true;

    this.profileService.GetProfileForEdit().subscribe(data => {      
      this.profileModel = data;
      this.isLoadingProfile = false;
      this.isLoadingUpdate = false;
    });
  }

  onSubmitUpdate() {
    this.isLoadingUpdate = true;

    setTimeout(() => {
      this.profileService.UpdateProfile(this.profileModel)
      .subscribe(data => {
        this.themeService.UpdateColorTheme(this.profileModel.CompanyHexColor, this.profileModel.TextOnCompanyHexColor, this.profileModel.DarkCompanyHexColor, this.profileModel.SecondaryCompanyHexColor, this.profileModel.TextOnSecondaryCompanyHexColor, this.profileModel.TextOnDarkCompanyHexColor);
        sessionStorage.setItem("profile", JSON.stringify(this.profileModel));
        this.isLoadingUpdate = false;
      });
    }, 1000);

  }
}
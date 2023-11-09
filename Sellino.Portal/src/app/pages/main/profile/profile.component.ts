import { Component, OnInit } from '@angular/core';
import { Tab } from 'src/app/interfaces/TabModel';
import { ProfileModel } from 'src/app/services/profile/profile';
import { ProfilePageModel, ProfilePageService } from 'src/app/services/profile/profile-page.service';
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
  profileModel: ProfileModel = {Name: '', Bio: 'Test', CompanyHexColor: '', DarkCompanyHexColor: '', TextOnCompanyHexColor: '', SecondaryCompanyHexColor: '', TextOnSecondaryCompanyHexColor: '', ProfileMediaId: 0, CoverMediaId: 0};
  profilePages: ProfilePageModel[] = [];
  isLoadingUpdate: boolean = false;
  isLoadingProfile: boolean = true;
  showCreateNewPage: boolean = false;
  newProfileName: string = "";

  constructor(private profileService: ProfileService, private themeService: ThemeService, private profilePageService: ProfilePageService) {}

  ngOnInit(): void {
    this.tabs = [ { title: 'Sider' }, {title: 'Farver'}, {title: 'Mediefiler'}, {title: 'Tekster'},{title: 'Returret'}, { title: 'Betaling' }];
    this.getProfileForEditing();
  }

  onTabClick(tab: Tab) {
    this.currentTab = tab.title;
  }

  createNewPage() {
    if(this.newProfileName != "") {
      this.profilePageService.CreateProfilePage(this.newProfileName)
        .subscribe(data => {
          this.profilePageService.GetProfilePages().subscribe(data => {
            this.newProfileName = "";
            this.showCreateNewPage = false;
            this.profilePages = data;
          });
        });
    }
  }

  getProfileForEditing() {
    this.isLoadingProfile = true;
    this.isLoadingUpdate = true;

    this.profileService.GetProfileForEdit().subscribe(data => {      
      this.profileModel = data;
      this.isLoadingProfile = false;
      this.isLoadingUpdate = false;

      this.profilePageService.GetProfilePages().subscribe(data => {
        this.profilePages = data;
      });
    });
  }

  onSubmitUpdate() {
    this.isLoadingUpdate = true;

    setTimeout(() => {
      this.profileService.UpdateProfile(this.profileModel)
      .subscribe(data => {
        this.themeService.UpdateColorTheme(this.profileModel.CompanyHexColor, this.profileModel.TextOnCompanyHexColor, this.profileModel.DarkCompanyHexColor, this.profileModel.SecondaryCompanyHexColor, this.profileModel.TextOnSecondaryCompanyHexColor);
        sessionStorage.setItem("profile", JSON.stringify(this.profileModel));
        this.isLoadingUpdate = false;
      });
    }, 1000);

  }
}
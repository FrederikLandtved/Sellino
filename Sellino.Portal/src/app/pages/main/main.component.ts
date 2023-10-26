import { Component, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { LoginService } from 'src/app/services/auth/login.service';
import { HomeModel, HomeService } from 'src/app/services/home/home.service';
import { MediaService } from 'src/app/services/media/media.service';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  fullName: string = '';
  homeModel: HomeModel = {FirstName: '', Profile: {Name: '', Bio: 'Test', CompanyHexColor: '', DarkCompanyHexColor: '', TextOnCompanyHexColor: '', SecondaryCompanyHexColor: '', TextOnSecondaryCompanyHexColor: '', ProfileMediaId: 0, CoverMediaId: 0}};
  profileImage: string = '';

  constructor(private authService: LoginService, private themeService: ThemeService, private homeService: HomeService, private mediaService: MediaService) {}

  ngOnInit(): void {
    let userObj = JSON.parse(<any>sessionStorage.getItem("user"));
    this.fullName = userObj.FirstName + ' ' + userObj.LastName;
    this.GetHomePage();
    this.UpdateColorTheme();
  }

  GetHomePage() {
    this.homeService.getHomePage().subscribe(data => {
      this.homeModel = data;
  
      if (this.homeModel.Profile.ProfileMediaId != null) {
        this.mediaService.GetMedia(this.homeModel.Profile.ProfileMediaId).subscribe(media => {
          this.profileImage = this.mediaService.ConvertMedia(media);
        });
      }      
    });
  }

  LogOut() {
    this.themeService.ResetColorTheme();
    this.authService.logOut();
  }

  UpdateColorTheme() {
    let profileObj = JSON.parse(<any>sessionStorage.getItem("profile"));
    this.themeService.UpdateColorTheme(profileObj.CompanyHexColor, profileObj.TextOnCompanyHexColor, profileObj.DarkCompanyHexColor, profileObj.SecondaryCompanyHexColor, profileObj.TextOnSecondaryCompanyHexColor);
  }
}

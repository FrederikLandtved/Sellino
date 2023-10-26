import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';
import { HomeModel, HomeService } from 'src/app/services/home/home.service';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  fullName: string = '';
  homeModel: HomeModel = {FirstName: '', Profile: {Name: '', Bio: 'Test', CompanyHexColor: '', DarkCompanyHexColor: '', TextOnCompanyHexColor: '', SecondaryCompanyHexColor: '', TextOnSecondaryCompanyHexColor: '', ProfileMediaId: 0, CoverMediaId: 0}};
  
  constructor(private authService: LoginService, private themeService: ThemeService, private homeService: HomeService) {}

  ngOnInit(): void {
    let userObj = JSON.parse(<any>sessionStorage.getItem("user"));
    this.fullName = userObj.FirstName + ' ' + userObj.LastName;
    this.GetHomePage();
    this.UpdateColorTheme();
  }

  GetHomePage(){
    this.homeService.getHomePage().subscribe(data => this.homeModel = data);
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

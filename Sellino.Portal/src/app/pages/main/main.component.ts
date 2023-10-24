import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  fullName: string = '';
  profileName: string = '';
  
  constructor(private authService: LoginService, private themeService: ThemeService) {}

  ngOnInit(): void {
    let userObj = JSON.parse(<any>sessionStorage.getItem("user"));
    this.fullName = userObj.FirstName + ' ' + userObj.LastName;

    this.UpdateColorTheme();
  }

  LogOut() {
    this.themeService.ResetColorTheme();
    this.authService.logOut();
  }

  UpdateColorTheme() {
    let profileObj = JSON.parse(<any>sessionStorage.getItem("profile"));
    this.themeService.UpdateColorTheme(profileObj.CompanyHexColor, profileObj.TextOnCompanyHexColor, profileObj.DarkCompanyHexColor, profileObj.SecondaryCompanyHexColor, profileObj.TextOnSecondaryCompanyHexColor);
    this.profileName = profileObj.Name;
  }
}

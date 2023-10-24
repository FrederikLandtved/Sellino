import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  fullName: string = '';
  profileName: string = '';
  
  constructor(private authService: LoginService) {}

  ngOnInit(): void {
    let userObj = JSON.parse(<any>sessionStorage.getItem("user"));
    this.fullName = userObj.firstName + ' ' + userObj.lastName;

    this.UpdateColorTheme();
  }

  LogOut() {
    this.authService.logOut();
  }

  UpdateColorTheme() {
    let profileObj = JSON.parse(<any>sessionStorage.getItem("profile"));
    this.profileName = profileObj.name;

    document.documentElement.style.setProperty('--company-color', profileObj.companyHexColor);
    document.documentElement.style.setProperty('--text-on-company-color', profileObj.textOnCompanyHexColor);
    document.documentElement.style.setProperty('--company-color-dark', profileObj.darkCompanyHexColor);
    document.documentElement.style.setProperty('--secondary-company-color', profileObj.secondaryCompanyHexColor);
    document.documentElement.style.setProperty('--secondary-text-color', profileObj.textOnSecondaryCompanyHexColor);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  UpdateColorTheme(companyHexColor: string, textOnCompanyHexColor: string, darkCompanyColor: string, secondaryCompanyHexColor: string, textOnSecondaryCompanyHexColor: string, textOnDarkCompanyColor: string) {
    document.documentElement.style.setProperty('--company-color', companyHexColor);
    document.documentElement.style.setProperty('--text-on-company-color', textOnCompanyHexColor);
    document.documentElement.style.setProperty('--company-color-dark', darkCompanyColor);
    document.documentElement.style.setProperty('--text-on-company-color-dark', textOnDarkCompanyColor);
    document.documentElement.style.setProperty('--secondary-company-color', secondaryCompanyHexColor);
    document.documentElement.style.setProperty('--secondary-text-color', textOnSecondaryCompanyHexColor);
  }

  ResetColorTheme(){
    document.documentElement.style.setProperty('--company-color', '#5786d1');
    document.documentElement.style.setProperty('--text-on-company-color', '#ffffff');
    document.documentElement.style.setProperty('--company-color-dark', '#3c66aa');
    document.documentElement.style.setProperty('--text-on-company-color-dark', '#ffffff');
    document.documentElement.style.setProperty('--secondary-company-color', '#22cc7c');
    document.documentElement.style.setProperty('--secondary-text-color', '#FFFFFF');
  }
}

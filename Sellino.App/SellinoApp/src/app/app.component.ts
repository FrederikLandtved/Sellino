import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    console.log("lets go");
    this.UpdateColorTheme();
  }

  UpdateColorTheme() {
    let profileObj = JSON.parse(<any>sessionStorage.getItem("profile"));
    this.themeService.UpdateColorTheme(profileObj.CompanyHexColor, profileObj.TextOnCompanyHexColor, profileObj.DarkCompanyHexColor, profileObj.SecondaryCompanyHexColor, profileObj.TextOnSecondaryCompanyHexColor, profileObj.TextOnDarkCompanyHexColor);
  }

  title = 'Sellino App';
}

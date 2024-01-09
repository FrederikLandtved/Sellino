import { Component } from '@angular/core';
import { ProfileService } from '../../services/profile/profile.service';
import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  profiles: any[] = [];

  constructor(private profileService: ProfileService, private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.ResetColorTheme();

    this.profileService.GetProfilesWithProducts().subscribe(data => {
      this.profiles = data;
    })
  }

  onProfileClick(profile: any) {
    sessionStorage.setItem("profile", JSON.stringify(profile));
    this.themeService.UpdateColorTheme(profile.CompanyHexColor, profile.TextOnCompanyHexColor, profile.DarkCompanyHexColor, profile.SecondaryCompanyHexColor, profile.TextOnSecondaryCompanyHexColor, profile.TextOnDarkCompanyColor);
  }

}

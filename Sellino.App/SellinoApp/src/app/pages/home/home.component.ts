import { Component } from '@angular/core';
import { ProfileService } from '../../services/profile/profile.service';
import { ThemeService } from '../../services/theme/theme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  profiles: any[] = [];

  constructor(private profileService: ProfileService, private themeService: ThemeService, private router: Router) {}

  ngOnInit(): void {
    this.themeService.ResetColorTheme();

    this.profileService.GetProfilesWithProducts().subscribe(data => {
      this.profiles = data;
    })
  }

  onProfileClick(item: any) {
    this.profileService.SetCurrentProfileState(item)
    let profile = item.Profile;
    sessionStorage.setItem("profile", JSON.stringify(profile));
    this.themeService.UpdateColorTheme(profile.CompanyHexColor, profile.TextOnCompanyHexColor, profile.DarkCompanyHexColor, profile.SecondaryCompanyHexColor, profile.TextOnSecondaryCompanyHexColor, profile.TextOnDarkCompanyColor);
    this.router.navigate(['profile/' + profile.ProfileToken]);
  }

}

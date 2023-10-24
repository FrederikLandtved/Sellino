import { Component, OnInit } from '@angular/core';
import { Tab } from 'src/app/interfaces/TabModel';
import { ProfileModel } from 'src/app/services/profile/profile';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  tabs: Tab[] = [];
  currentTab: string = "";
  showCreateDialog: boolean = true;
  profileModel: ProfileModel = {name: '', bio: '', companyHexColor: '', darkCompanyHexColor: '', textOnCompanyHexColor: '', secondaryCompanyHexColor: '', textOnSecondaryCompanyHexColor: ''};

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.tabs = [{title: 'Farver'}, { title: 'Profilen' }, {title: 'Tekster'}, {title: 'Mediefiler'}, {title: 'Returret'}, { title: 'Betaling' }];
    this.getProfileForEditing();
  }

  onTabClick(tab: Tab) {
    this.currentTab = tab.title;
  }

  getProfileForEditing() {
    this.profileService.GetProfileForEdit().subscribe(data => {
      this.profileModel = data;

      console.log(this.profileModel);
    });
  }
}
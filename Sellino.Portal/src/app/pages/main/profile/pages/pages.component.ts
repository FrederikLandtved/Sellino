import { Component, OnInit } from '@angular/core';
import { ProfilePageService, ProfilePagesWithSectionsModel } from 'src/app/services/profile/profile-page.service';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'profile-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit{
  showCreateNewPage: boolean = false;
  newProfileName: string = "";
  profilePages: ProfilePagesWithSectionsModel[] = [];
  currentSelectedIndex: number | null = null;
  isLoading: boolean = true;

  constructor(private profileService: ProfileService, private profilePageService: ProfilePageService) {}

  ngOnInit(): void {
    this.isLoading = true;

    setTimeout(() => {
      this.getPages();
    }, 500);
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

  toggleSection(index: number) {
    this.currentSelectedIndex = index;
  }

  getPages() {
    this.profilePageService.GetProfilePages().subscribe(data => {
      this.profilePages = data;
      this.isLoading = false;

    }); 
  }
}

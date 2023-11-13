import { Component, OnInit } from '@angular/core';
import { ProfilePageSectionModel, ProfilePageService, ProfilePagesWithSectionsModel } from 'src/app/services/profile/profile-page.service';
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
  currentSelectedPage: number | null = 0;
  currentSelectedSection: number | null = 0;
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

  togglePage(index: number) {
    if(index == this.currentSelectedPage){
      this.currentSelectedPage = null;
    } else {
      this.currentSelectedSection = null;    
      this.currentSelectedPage = index;    
    }
  }

  toggleSection(section: ProfilePageSectionModel) {
    if(section.ProfilePageSectionId == this.currentSelectedSection){
      this.currentSelectedSection = null;
    } else {
      this.currentSelectedSection = section.ProfilePageSectionId;
    }
  }

  getPages() {
    this.profilePageService.GetProfilePages().subscribe(data => {
      this.profilePages = data;
      console.log(data);
      
      this.isLoading = false;

    }); 
  }
}

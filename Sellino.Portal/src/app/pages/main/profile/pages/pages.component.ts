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
  newPageSectionName: string = "";
  profilePages: ProfilePagesWithSectionsModel[] = [];
  currentSelectedPage: number | null = 0;
  currentSelectedSection: number | null = null;
  isLoading: boolean = true;
  
  constructor(private profileService: ProfileService, private profilePageService: ProfilePageService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.getPages();
  }

  createNewPage() {
    if(this.newProfileName != "") {
      this.profilePageService.CreateProfilePage(this.newProfileName)
        .subscribe(data => {
          this.newProfileName = "";
          this.showCreateNewPage = false;
          this.getPages();
        });
    }
  }

  createNewSection(item: ProfilePagesWithSectionsModel) {
    if(this.newPageSectionName != ""){
      this.profilePageService.CreatePageSection(this.newPageSectionName, item).subscribe(data => {
        this.getPages();
        this.newPageSectionName = "";
      });
    }
  }

  toggleCreateNewPage() {
    this.currentSelectedPage = null;
    this.showCreateNewPage = !this.showCreateNewPage;
  }

  togglePage(index: number) {
    this.profilePages[index].showAddNewSection = false;

    if(index == this.currentSelectedPage){
      this.currentSelectedPage = null;
    } else {
      this.showCreateNewPage = false;

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
    this.isLoading = true;
    setTimeout(() => {
      this.profilePageService.GetProfilePages().subscribe(data => {
        this.profilePages = data;
        this.isLoading = false;
  
      }); 
    }, 500);
  }
}

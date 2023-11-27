import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProfilePageSectionModel, ProfilePageService, ProfilePageWithSectionsModel } from 'src/app/services/profile/profile-page.service';

@Component({
  selector: 'profile-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit{
  showCreateNewPage: boolean = false;
  newProfileName: string = "";
  newPageSectionName: string = "";
  profilePages: ProfilePageWithSectionsModel[] = [];
  currentSelectedPage: number | null = null;
  currentSelectedSection: number | null = null;
  isLoading: boolean = true;
  
  @Output() onPageSelect = new EventEmitter<ProfilePageWithSectionsModel>();

  constructor(private profilePageService: ProfilePageService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.getPages(true);
  }

  createNewPage() {
    if(this.newProfileName != "") {
      this.profilePageService.CreateProfilePage(this.newProfileName)
        .subscribe(data => {
          this.newProfileName = "";
          this.showCreateNewPage = false;
          this.getPages(false);
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
      this.onPageSelect.emit(this.profilePages[index]);
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

  getPages(selectFirst: boolean) {
    this.isLoading = true;
    setTimeout(() => {
      this.profilePageService.GetProfilePages().subscribe(data => {
        this.profilePages = data;
        this.isLoading = false;

        if(selectFirst){
          this.currentSelectedPage = 0;
        }

        if(this.currentSelectedPage != null){
          this.onPageSelect.emit(this.profilePages[this.currentSelectedPage]);
        }
      }); 
    }, 500);
  }

  onCreateNewSection(model: ProfilePageSectionModel, item: ProfilePageWithSectionsModel) {
    this.profilePageService.CreatePageSection(model, item).subscribe(data => {
      this.getPages(false);
      this.newPageSectionName = "";
    });
  }
}

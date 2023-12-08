import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateProfilePageSectionComponent } from 'src/app/components/modal-templates/profile-page-section/create-profile-page-section/create-profile-page-section.component';
import { CreateProfilePageComponent } from 'src/app/components/modal-templates/profile-page/create-profile-page/create-profile-page.component';
import { ProfilePageModel, ProfilePageSectionModel, ProfilePageService, ProfilePageWithSectionsModel } from 'src/app/services/profile/profile-page.service';

@Component({
  selector: 'profile-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit{
  showCreateNewPage: boolean = false;
  newPageSectionName: string = "";
  profilePages: ProfilePageWithSectionsModel[] = [];
  currentSelectedPage: number | null = null;
  currentSelectedSection: number | null = null;
  isLoading: boolean = true;
  
  @Output() onPageSelect = new EventEmitter<ProfilePageWithSectionsModel>();

  constructor(private profilePageService: ProfilePageService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.getPages(true);
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

        this.openNewSectionDialog(this.profilePages[0])

      }); 
    }, 500);
  }

  onCreateNewSection(model: ProfilePageSectionModel, item: ProfilePageWithSectionsModel) {
    this.profilePageService.CreatePageSection(model, item).subscribe(data => {
      this.getPages(false);
      this.newPageSectionName = "";
    });
  }

  openNewProfileDialog(){
    const dialogRef = this.dialog.open(CreateProfilePageComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {      
      if(result && result != '') {
        this.profilePageService.CreateProfilePage(result)
          .subscribe(data => {
            this.getPages(false);
          });
      }    
    });
  }

  openNewSectionDialog(profilePage: ProfilePageWithSectionsModel) {
    const dialogRef = this.dialog.open(CreateProfilePageSectionComponent, {
      data: { profileName: profilePage.ProfilePage.Name },
    });

    dialogRef.afterClosed().subscribe(result => {      
      if(result && result != '') {


      }    
    });
  }
}

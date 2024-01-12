import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateProfilePageSectionComponent } from 'src/app/components/modal-templates/profile-page-section/create-profile-page-section/create-profile-page-section.component';
import { CreateProfilePageComponent } from 'src/app/components/modal-templates/profile-page/create-profile-page/create-profile-page.component';
import { DeleteProfilePageComponent } from 'src/app/components/modal-templates/profile-page/delete-profile-page/delete-profile-page.component';
import { EditProfilePageComponent } from 'src/app/components/modal-templates/profile-page/edit-profile-page/edit-profile-page.component';
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
        this.openNewSectionDialog(this.profilePages[0])
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
      data: { profile: profilePage },
    });

    dialogRef.afterClosed().subscribe(result => {      
      if(result && result != '') {
        this.getPages(false);
      }    
    });
  }

  openDeletePage(profilePage: ProfilePageWithSectionsModel) {
    const dialogRef = this.dialog.open(DeleteProfilePageComponent, {
      data: { profile: profilePage },
    });

    dialogRef.afterClosed().subscribe(result => {      
      if(result == true) {
        this.getPages(true);
      }    
    });
  }

  openEditPage(profilePage: ProfilePageWithSectionsModel) {
    const dialogRef = this.dialog.open(EditProfilePageComponent, {
      data: { profile: profilePage },
    });

    dialogRef.afterClosed().subscribe(result => {      
      if(result == true) {
        this.getPages(true);
      }    
    });
  }
}

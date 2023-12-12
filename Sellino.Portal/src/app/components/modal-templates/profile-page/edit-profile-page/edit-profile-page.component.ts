import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProfilePageModel, ProfilePageService, ProfilePageWithSectionsModel } from 'src/app/services/profile/profile-page.service';

@Component({
  selector: 'app-edit-profile-page',
  templateUrl: './edit-profile-page.component.html',
  styleUrls: ['./edit-profile-page.component.scss']
})
export class EditProfilePageComponent {
  profile: ProfilePageWithSectionsModel | null = null;
  editPageModel: ProfilePageModel = { Name: '', IsFrontpage: false, ProfileId: 0 };

  constructor(private dialog: MatDialogRef<EditProfilePageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private profilePageService: ProfilePageService) {}

  ngOnInit(): void {
    this.profile = this.data.profile;
    this.editPageModel = { ...this.profile?.ProfilePage! };
  }

  onCloseDialog() {
    this.dialog.close();
  }

  onSubmit() {    
    this.profilePageService.UpdateProfilePage(this.editPageModel, this.profile?.ProfilePage.ProfilePageToken!).subscribe(data => {
      console.log(data);
      this.dialog.close(data);
    });
  }
}

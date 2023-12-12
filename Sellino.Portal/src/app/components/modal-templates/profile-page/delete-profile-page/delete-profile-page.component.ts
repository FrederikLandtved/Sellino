import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProfilePageService, ProfilePageWithSectionsModel } from 'src/app/services/profile/profile-page.service';

@Component({
  selector: 'app-delete-profile-page',
  templateUrl: './delete-profile-page.component.html',
  styleUrls: ['./delete-profile-page.component.scss']
})
export class DeleteProfilePageComponent implements OnInit {
  newProfileName: string = '';
  profile: ProfilePageWithSectionsModel | null = null;

  constructor(private dialog: MatDialogRef<DeleteProfilePageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private profilePageService: ProfilePageService) {}

  ngOnInit(): void {
    this.profile = this.data.profile;
    console.log(this.profile);
  }

  onCloseDialog() {
    this.dialog.close();
  }

  onSubmit() {
    this.profilePageService.DeleteProfilePage(this.profile?.ProfilePage.ProfilePageToken!).subscribe(data => {
      console.log(data);
      this.dialog.close(data);
    });
  }
}

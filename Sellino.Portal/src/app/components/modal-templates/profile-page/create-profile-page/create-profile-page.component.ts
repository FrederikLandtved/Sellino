import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-profile-page',
  templateUrl: './create-profile-page.component.html',
  styleUrls: ['./create-profile-page.component.scss']
})
export class CreateProfilePageComponent {
  newProfileName: string = '';

  constructor(private dialog: MatDialogRef<CreateProfilePageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) {}

  onCloseDialog() {
    this.dialog.close();
  }

  onSubmit() {
    this.dialog.close(this.newProfileName);
  }
}

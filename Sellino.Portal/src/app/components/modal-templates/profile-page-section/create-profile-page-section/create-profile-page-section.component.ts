import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-profile-page-section',
  templateUrl: './create-profile-page-section.component.html',
  styleUrls: ['./create-profile-page-section.component.scss']
})
export class CreateProfilePageSectionComponent implements OnInit {
  profileName: string = '';
  newSectionName: string = '';

  constructor(private dialog: MatDialogRef<CreateProfilePageSectionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}


  ngOnInit(): void {
    this.profileName = this.data.profileName;

    console.log(this.data);
    
  }

  onCloseDialog() {
    this.dialog.close();
  }

  onSubmit() {
    this.dialog.close(this.newSectionName);
  }
}

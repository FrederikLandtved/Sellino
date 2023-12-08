import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { DropdownOption } from 'src/app/components/ui-kit/dropdown/dropdown.component';

@Component({
  selector: 'create-profile-page',
  templateUrl: './create-profile-page.component.html',
  styleUrls: ['./create-profile-page.component.scss']
})
export class CreateProfilePageComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
  }
  newProfileName: string = '';

  logas(){
    console.log(this.newProfileName);
    
  }
}

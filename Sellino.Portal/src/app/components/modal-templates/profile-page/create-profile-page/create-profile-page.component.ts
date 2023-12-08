import { Component } from '@angular/core';
import { DropdownOption } from 'src/app/components/ui-kit/dropdown/dropdown.component';

@Component({
  selector: 'create-profile-page',
  templateUrl: './create-profile-page.component.html',
  styleUrls: ['./create-profile-page.component.scss']
})
export class CreateProfilePageComponent {
  newProfileName: string = '';
  options: DropdownOption[] = [{Id: 1, Title: "asd"}];

  logasd(){
    console.log("Hello");
    
  }
}

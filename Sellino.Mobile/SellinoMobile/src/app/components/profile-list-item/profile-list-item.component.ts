import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'profile-list-item',
  standalone: true,
  imports: [],
  templateUrl: './profile-list-item.component.html',
  styleUrl: './profile-list-item.component.scss'
})
export class ProfileListItemComponent {
  @Input() profileName: string = '';
  @Input() bio: string = '';
  @Input() backgroundColor: string = 'black';
  @Input() textColor: string = 'yellow';

}

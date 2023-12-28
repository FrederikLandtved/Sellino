import { Component, Input } from '@angular/core';

@Component({
  selector: 'profile-list-item',
  templateUrl: './profile-list-item.component.html',
  styleUrl: './profile-list-item.component.scss'
})
export class ProfileListItemComponent {
  @Input() profileName: string = '';
  @Input() bio: string = '';
  @Input() backgroundColor: string = 'black';
  @Input() textColor: string = 'yellow';
  @Input() products: any[] = [];
}

import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { MediaPipe } from '../../pipes/media.pipe';

@Component({
  selector: 'profile-list-item',
  standalone: true,
  imports: [CommonModule, MediaPipe],
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

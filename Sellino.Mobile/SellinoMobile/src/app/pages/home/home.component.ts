import { Component } from '@angular/core';
import { ProfileListItemComponent } from '../../components/profile-list-item/profile-list-item.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProfileListItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

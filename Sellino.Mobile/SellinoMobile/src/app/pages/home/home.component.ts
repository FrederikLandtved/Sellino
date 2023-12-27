import { Component, OnInit } from '@angular/core';
import { ProfileListItemComponent } from '../../components/profile-list-item/profile-list-item.component';
import { ProfileService } from '../../services/profile/profile.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProfileListItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  profiles: any[] = [];

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.GetProfilesWithProducts().subscribe(data => {
      this.profiles = data;
      console.log(data);
      
    })
  }

}

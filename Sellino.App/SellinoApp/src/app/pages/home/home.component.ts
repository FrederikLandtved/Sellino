import { Component } from '@angular/core';
import { ProfileService } from '../../services/profile/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  profiles: any[] = [];

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.GetProfilesWithProducts().subscribe(data => {
      this.profiles = data;
      console.log(data);
      
    })
  }

}

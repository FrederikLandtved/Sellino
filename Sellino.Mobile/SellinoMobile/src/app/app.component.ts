import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProfileListItemComponent } from './components/profile-list-item/profile-list-item.component';
import { HomeService } from './services/home.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProfileListItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'SellinoMobile';

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.GetHomePage().subscribe(data => console.log(data));
  }
}

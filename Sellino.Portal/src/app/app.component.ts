import { Component, OnInit } from '@angular/core';
import { HomeService } from './services/home/home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Sellino.Portal';

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    // Test if application is connected to API
    this.homeService.touch().subscribe(data => {
      console.log(data);
    })
  }
}

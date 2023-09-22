import { Component, OnInit } from '@angular/core';
import { Tab } from 'src/app/interfaces/TabModel';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tabs: Tab[] = [];

  ngOnInit(): void {
    this.tabs = [{title: 'Produkter'}, { title: 'Produktgrupper' }];
  }
}

import { Component, OnInit } from '@angular/core';
import { Tab } from 'src/app/interfaces/TabModel';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  tabs: Tab[] = [];
  currentTab: string = "";
  showCreateDialog: boolean = true;

  ngOnInit(): void {
    this.tabs = [{title: 'Profilen'}, { title: 'Farver' }, {title: 'Tekster'}, {title: 'Mediefiler'}, {title: 'Returret'}];
  }

  onTabClick(tab: Tab) {
    this.currentTab = tab.title;
  }
}

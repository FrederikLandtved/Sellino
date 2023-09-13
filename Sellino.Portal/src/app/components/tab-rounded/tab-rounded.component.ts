import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tab-rounded',
  templateUrl: './tab-rounded.component.html',
  styleUrls: ['./tab-rounded.component.scss']
})
export class TabRoundedComponent implements OnInit {
  tabs: Tab[] = [];
  activeTab: string = "";

  ngOnInit(): void {
    this.tabs = [{title: 'Profilen'}, { title: 'Farver' }, {title: 'Tekster'}, {title: 'Mediefiler'}, {title: 'Returret'}];
    this.activeTab = this.tabs[0].title;
  }

  onTabClick(tab: Tab){
    this.activeTab = tab.title;
  }
}

interface Tab {
  title: string
}

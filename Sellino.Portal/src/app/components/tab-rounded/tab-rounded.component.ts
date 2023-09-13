import { Component, OnInit, Input } from '@angular/core';
import { Tab } from 'src/app/interfaces/TabModel';

@Component({
  selector: 'tab-rounded',
  templateUrl: './tab-rounded.component.html',
  styleUrls: ['./tab-rounded.component.scss']
})
export class TabRoundedComponent implements OnInit {
  @Input() tabOptions: Tab[] = [];

  activeTab: string = "";

  ngOnInit(): void {
    this.activeTab = this.tabOptions[0].title;
  }

  onTabClick(tab: Tab){
    if(!tab.disabled){
      this.activeTab = tab.title;
    }
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sl-tab-rounded',
  templateUrl: './tab-rounded.component.html',
  styleUrls: ['./tab-rounded.component.scss']
})
export class TabRoundedComponent implements OnInit {
  @Input() tabOptions: Tab[] = [];
  @Output() onTabChanged = new EventEmitter<Tab>();
  activeTab: string = "";

  ngOnInit(): void {
    this.activeTab = this.tabOptions[0].title;
    this.onTabChanged.emit(this.tabOptions[0]);
  }

  onTabClick(tab: Tab){
    if(!tab.disabled){
      this.activeTab = tab.title;
      this.onTabChanged.emit(tab);
    }
  }
}

export interface Tab {
  title: string,
  disabled?: boolean
}

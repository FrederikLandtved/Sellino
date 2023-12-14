import { Component, OnInit } from '@angular/core';
import { Tab } from 'src/app/components/ui-kit/tab-rounded/tab-rounded.component';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss']
})
export class InsightsComponent implements OnInit {
  tabs: Tab[] = [];

  ngOnInit(): void {
    this.tabs = [{title: 'Produkter'}, { title: 'Indkøbskurv' }, {title: 'Profilen', disabled: true}];
  }
}

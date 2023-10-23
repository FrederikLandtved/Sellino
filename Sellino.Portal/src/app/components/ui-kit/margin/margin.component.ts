import { Component, Input } from '@angular/core';

@Component({
  selector: 'sl-margin',
  templateUrl: './margin.component.html',
  styleUrls: ['./margin.component.scss']
})
export class MarginComponent {
  @Input() px: number = 10;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'sl-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() title: string = "Button";
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sl-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() title: string = "Button";
  @Input() type: string = 'primary';
  @Output() onClick = new EventEmitter();

  onButtonClick() {
    this.onClick.emit();
  }
}

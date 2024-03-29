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
  @Input() isLoading: boolean = false;
  @Input() disabled: boolean = false;

  onButtonClick() {
    this.onClick.emit();
  }
}

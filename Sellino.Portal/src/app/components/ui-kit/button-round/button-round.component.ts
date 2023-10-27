import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sl-button-round',
  templateUrl: './button-round.component.html',
  styleUrls: ['./button-round.component.scss']
})
export class ButtonRoundComponent {
  @Input() title: string = "";
  @Input() type: string = 'primary';
  @Output() onClick = new EventEmitter();

  onButtonClick() {
    this.onClick.emit();
  }
}

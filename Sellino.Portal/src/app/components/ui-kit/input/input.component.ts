import { Component, Input } from '@angular/core';

@Component({
  selector: 'sl-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() icon: string = '';
  @Input() placeholder: string = '';
}

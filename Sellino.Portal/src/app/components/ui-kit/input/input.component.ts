// input.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'sl-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() icon: string = '';
  @Input() placeholder: string = '';
  @Input() name: string = '';
  @Input() label: string = '';
  @Input() formControlName: FormControl<any> = new FormControl('');
  @Input() password: boolean = false;
  
  @Input() value: string = '';

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  isInputFocused: boolean = false;

  onInputFocus() {
    this.isInputFocused = true;
  }

  onInputBlur() {
    this.isInputFocused = false;
  }


  onModelChange(newValue: string) {
    this.value = newValue;
    this.valueChange.emit(newValue); 
  }
}

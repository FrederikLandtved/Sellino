import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'sl-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent {
  @Input() icon: string = '';
  @Input() placeholder: string = '';
  @Input() name: string = '';
  @Input() label: string = '';
  @Input() formControlName: FormControl<any> = new FormControl('');
  @Input() color: string = '#ffffff';
  
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

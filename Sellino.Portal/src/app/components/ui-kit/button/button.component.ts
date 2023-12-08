import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'sl-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
  }
  @Input() title: string = "Button";
  @Input() type: string = 'primary';
  @Output() onClick = new EventEmitter();
  @Input() isLoading: boolean = false;
  @Input() disabled: boolean = false;

  onButtonClick() {
    this.onClick.emit();
  }
}

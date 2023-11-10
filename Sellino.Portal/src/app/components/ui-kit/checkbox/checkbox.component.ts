import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sl-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() label: string = 'Opret butik samtidig';
  @Input() name: string = 'asd';
  @Input() isChecked: boolean = false;
  @Output() onChecked: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
    // todo: emit event on init
  }

  checkValue(){
    this.onChecked.emit(this.isChecked);
  }
}

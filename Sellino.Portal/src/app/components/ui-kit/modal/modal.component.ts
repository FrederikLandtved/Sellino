import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sl-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() size? = 'md';
  @Input() title? = 'Modal title';

  @Output() closeEvent = new EventEmitter();
  @Output() submitEvent = new EventEmitter();

  constructor(private elementRef: ElementRef) {}

  close() {
    this.elementRef.nativeElement.remove();
    this.closeEvent.emit();
  }

  submit() {
    this.elementRef.nativeElement.remove();{
      this.submitEvent.emit();
    }
  }
}

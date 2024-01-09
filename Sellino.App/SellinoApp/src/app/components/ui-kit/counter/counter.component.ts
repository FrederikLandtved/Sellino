import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'sl-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  counter: number = 0;
  @Output() onCounterChange = new EventEmitter<number>();

  add(){
    if(this.counter != 10){
      this.counter = this.counter + 1;
      this.registerChange();
    }
  }

  subtract() {
    if(this.counter != 0){
      this.counter = this.counter - 1;
      this.registerChange();
    }
  }

  registerChange(){
    this.onCounterChange.emit(this.counter);
  }
}

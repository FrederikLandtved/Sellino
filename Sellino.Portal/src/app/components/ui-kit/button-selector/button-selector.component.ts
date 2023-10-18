import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'sl-button-selector',
  templateUrl: './button-selector.component.html',
  styleUrls: ['./button-selector.component.scss']
})
export class ButtonSelectorComponent implements OnInit {
  @Input() buttonSelector: ButtonSelector = {Id: 0, Title: 'Selector', Options: []};
  @Output() selectedItems = new EventEmitter<ButtonSelector>();

  buttons: ButtonSelector = {Id: 0, Title: 'Selector', Options: []};

  ngOnInit(): void {
    this.buttons = this.buttonSelector;
    this.selectedItems.emit(this.buttons)
  }

  onButtonClick(item: ButtonSelectorItem){
    item.IsSelected = !item.IsSelected;
    this.selectedItems.emit(this.buttons)
  }

}

export interface ButtonSelector {
  Id: number,
  Title: string,
  Options: ButtonSelectorItem[]
}

export interface ButtonSelectorItem {
  Id: number,
  Title: string,
  IsSelected: boolean
}

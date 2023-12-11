import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sl-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {

  @Input() icon: string = 'las la-sort-numeric-down';
  @Input() title: string = 'Dropdown';
  @Input() options: DropdownOption[] = [];
  @Input() label: string = "";

  @Output() onOptionClicked = new EventEmitter<number>();

  selectedId: number | null = null;

  public dropdownIsOpen: boolean = false;
  private wasInside = false;

  @HostListener('click')
  clickInside() {
    this.wasInside = true;
  }

  @HostListener('document:click')
  clickout() {
    if (!this.wasInside) {
      this.dropdownIsOpen = false;
    }
    this.wasInside = false;
  }

  onDropdownClick() {
    this.dropdownIsOpen = !this.dropdownIsOpen;
  }

  onContentItemClick(clickedOption: DropdownOption) {
    this.title = clickedOption.Title;
    this.dropdownIsOpen = false;
    this.selectedId = clickedOption.Id;
    this.onOptionClicked.emit(clickedOption.Id);
  }
}

export interface DropdownOption {
  Id: number,
  Title: string
}

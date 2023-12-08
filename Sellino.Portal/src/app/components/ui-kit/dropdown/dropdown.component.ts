import { ChangeDetectorRef, Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

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

  public dropdownIsOpen: boolean = false;
  private wasInside = false;

  constructor(private cdr: ChangeDetectorRef) {}

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
    this.cdr.detectChanges();
  }

  onDropdownClick() {
    console.log("hej");
    
    this.dropdownIsOpen = !this.dropdownIsOpen;
    this.cdr.detectChanges();
  }

  onContentItemClick(clickedOption: DropdownOption) {
    this.title = clickedOption.Title;
    this.dropdownIsOpen = false;
    this.onOptionClicked.emit(clickedOption.Id);
    this.cdr.detectChanges();

  }
}

export interface DropdownOption {
  Id: number,
  Title: string
}

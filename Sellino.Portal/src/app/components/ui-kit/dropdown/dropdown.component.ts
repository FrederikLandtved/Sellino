import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'sl-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() icon: string = 'las la-sort-numeric-down';
  @Input() title: string = 'Dropdown';

  public dropdownIsOpen: boolean = true;
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

  onContentClick() {
    this.dropdownIsOpen = !this.dropdownIsOpen;
  }
}
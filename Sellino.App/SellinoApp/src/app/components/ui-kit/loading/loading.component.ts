import { Component, Input } from '@angular/core';

@Component({
  selector: 'sl-loading',
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {
  @Input() color: string = 'grey';
}



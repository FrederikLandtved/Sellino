import { Component } from '@angular/core';

@Component({
  selector: 'create-section-button',
  templateUrl: './create-section-button.component.html',
  styleUrls: ['./create-section-button.component.scss']
})
export class CreateSectionButtonComponent {
  createStep: CreateSectionStep = CreateSectionStep.Start;

  changeStep(){
    this.createStep = this.createStep === 0 ? 1 : 0;
  }
}

enum CreateSectionStep {
  Start = 0,
  ChooseType = 1,
  Image = 3,
  ProductGroup = 4,
  Tekst = 5
}
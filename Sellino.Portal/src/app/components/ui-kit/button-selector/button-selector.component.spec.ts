import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSelectorComponent } from './button-selector.component';

describe('ButtonSelectorComponent', () => {
  let component: ButtonSelectorComponent;
  let fixture: ComponentFixture<ButtonSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

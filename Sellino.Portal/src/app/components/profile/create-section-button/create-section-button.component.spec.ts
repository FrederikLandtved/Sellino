import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSectionButtonComponent } from './create-section-button.component';

describe('CreateSectionButtonComponent', () => {
  let component: CreateSectionButtonComponent;
  let fixture: ComponentFixture<CreateSectionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSectionButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSectionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

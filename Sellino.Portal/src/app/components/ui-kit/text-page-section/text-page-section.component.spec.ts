import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextPageSectionComponent } from './text-page-section.component';

describe('TextPageSectionComponent', () => {
  let component: TextPageSectionComponent;
  let fixture: ComponentFixture<TextPageSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextPageSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextPageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

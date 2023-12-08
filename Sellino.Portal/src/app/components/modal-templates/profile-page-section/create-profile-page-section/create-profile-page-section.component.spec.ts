import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProfilePageSectionComponent } from './create-profile-page-section.component';

describe('CreateProfilePageSectionComponent', () => {
  let component: CreateProfilePageSectionComponent;
  let fixture: ComponentFixture<CreateProfilePageSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProfilePageSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProfilePageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

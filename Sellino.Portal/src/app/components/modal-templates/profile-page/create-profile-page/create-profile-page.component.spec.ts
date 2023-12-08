import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProfilePageComponent } from './create-profile-page.component';

describe('CreateProfilePageComponent', () => {
  let component: CreateProfilePageComponent;
  let fixture: ComponentFixture<CreateProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProfilePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

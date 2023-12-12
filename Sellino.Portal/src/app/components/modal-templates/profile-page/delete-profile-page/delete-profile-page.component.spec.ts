import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProfilePageComponent } from './delete-profile-page.component';

describe('DeleteProfilePageComponent', () => {
  let component: DeleteProfilePageComponent;
  let fixture: ComponentFixture<DeleteProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProfilePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

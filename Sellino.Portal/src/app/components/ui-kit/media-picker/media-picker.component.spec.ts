import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaPickerComponent } from './media-picker.component';

describe('MediaPickerComponent', () => {
  let component: MediaPickerComponent;
  let fixture: ComponentFixture<MediaPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaPickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

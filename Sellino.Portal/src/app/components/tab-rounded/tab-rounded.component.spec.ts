import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabRoundedComponent } from './tab-rounded.component';

describe('TabRoundedComponent', () => {
  let component: TabRoundedComponent;
  let fixture: ComponentFixture<TabRoundedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabRoundedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabRoundedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGroupGridComponent } from './product-group-grid.component';

describe('ProductGroupGridComponent', () => {
  let component: ProductGroupGridComponent;
  let fixture: ComponentFixture<ProductGroupGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductGroupGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductGroupGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

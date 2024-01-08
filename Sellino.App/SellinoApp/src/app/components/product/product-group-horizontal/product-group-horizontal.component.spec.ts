import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGroupHorizontalComponent } from './product-group-horizontal.component';

describe('ProductGroupHorizontalComponent', () => {
  let component: ProductGroupHorizontalComponent;
  let fixture: ComponentFixture<ProductGroupHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductGroupHorizontalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductGroupHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGroupListComponent } from './product-group-list.component';

describe('ProductGroupListComponent', () => {
  let component: ProductGroupListComponent;
  let fixture: ComponentFixture<ProductGroupListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductGroupListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

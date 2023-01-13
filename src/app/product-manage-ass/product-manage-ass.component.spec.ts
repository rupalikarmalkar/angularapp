import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductManageAssComponent } from './product-manage-ass.component';

describe('ProductManageAssComponent', () => {
  let component: ProductManageAssComponent;
  let fixture: ComponentFixture<ProductManageAssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductManageAssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductManageAssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

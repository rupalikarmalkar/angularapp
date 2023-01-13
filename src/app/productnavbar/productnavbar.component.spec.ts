import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductnavbarComponent } from './productnavbar.component';

describe('ProductnavbarComponent', () => {
  let component: ProductnavbarComponent;
  let fixture: ComponentFixture<ProductnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

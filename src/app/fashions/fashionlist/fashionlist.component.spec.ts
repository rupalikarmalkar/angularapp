import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionlistComponent } from './fashionlist.component';

describe('FashionlistComponent', () => {
  let component: FashionlistComponent;
  let fixture: ComponentFixture<FashionlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FashionlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

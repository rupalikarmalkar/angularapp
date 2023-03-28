import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoddingSpinnerComponent } from './lodding-spinner.component';

describe('LoddingSpinnerComponent', () => {
  let component: LoddingSpinnerComponent;
  let fixture: ComponentFixture<LoddingSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoddingSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoddingSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionChildComponent } from './revision-child.component';

describe('RevisionChildComponent', () => {
  let component: RevisionChildComponent;
  let fixture: ComponentFixture<RevisionChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisionChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisionChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

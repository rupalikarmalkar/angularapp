import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionParentComponent } from './revision-parent.component';

describe('RevisionParentComponent', () => {
  let component: RevisionParentComponent;
  let fixture: ComponentFixture<RevisionParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisionParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisionParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

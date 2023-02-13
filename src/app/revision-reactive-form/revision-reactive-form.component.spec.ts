import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionReactiveFormComponent } from './revision-reactive-form.component';

describe('RevisionReactiveFormComponent', () => {
  let component: RevisionReactiveFormComponent;
  let fixture: ComponentFixture<RevisionReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisionReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisionReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

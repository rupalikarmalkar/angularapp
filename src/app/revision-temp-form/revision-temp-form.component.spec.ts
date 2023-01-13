import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionTempFormComponent } from './revision-temp-form.component';

describe('RevisionTempFormComponent', () => {
  let component: RevisionTempFormComponent;
  let fixture: ComponentFixture<RevisionTempFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisionTempFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisionTempFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

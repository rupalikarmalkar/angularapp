import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionSwitchComponent } from './revision-switch.component';

describe('RevisionSwitchComponent', () => {
  let component: RevisionSwitchComponent;
  let fixture: ComponentFixture<RevisionSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisionSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisionSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

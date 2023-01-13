import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionstrComponent } from './revisionstr.component';

describe('RevisionstrComponent', () => {
  let component: RevisionstrComponent;
  let fixture: ComponentFixture<RevisionstrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisionstrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisionstrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

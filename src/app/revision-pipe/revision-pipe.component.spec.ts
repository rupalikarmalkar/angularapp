import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionPipeComponent } from './revision-pipe.component';

describe('RevisionPipeComponent', () => {
  let component: RevisionPipeComponent;
  let fixture: ComponentFixture<RevisionPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisionPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisionPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JesonTaskComponent } from './jeson-task.component';

describe('JesonTaskComponent', () => {
  let component: JesonTaskComponent;
  let fixture: ComponentFixture<JesonTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JesonTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JesonTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

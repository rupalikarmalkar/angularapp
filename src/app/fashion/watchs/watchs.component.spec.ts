import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchsComponent } from './watchs.component';

describe('WatchsComponent', () => {
  let component: WatchsComponent;
  let fixture: ComponentFixture<WatchsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

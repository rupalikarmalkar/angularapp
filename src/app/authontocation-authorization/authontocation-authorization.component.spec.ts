import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthontocationAuthorizationComponent } from './authontocation-authorization.component';

describe('AuthontocationAuthorizationComponent', () => {
  let component: AuthontocationAuthorizationComponent;
  let fixture: ComponentFixture<AuthontocationAuthorizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthontocationAuthorizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthontocationAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

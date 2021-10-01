import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLeaveProfileApplicationPresentationComponent } from './view-leave-profile-application-presentation.component';

describe('ViewLeaveProfileApplicationPresentationComponent', () => {
  let component: ViewLeaveProfileApplicationPresentationComponent;
  let fixture: ComponentFixture<ViewLeaveProfileApplicationPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLeaveProfileApplicationPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLeaveProfileApplicationPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

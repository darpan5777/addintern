import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLeaveApplicationPresentationComponent } from './view-leave-application-presentation.component';

describe('ViewLeaveApplicationPresentationComponent', () => {
  let component: ViewLeaveApplicationPresentationComponent;
  let fixture: ComponentFixture<ViewLeaveApplicationPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLeaveApplicationPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLeaveApplicationPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

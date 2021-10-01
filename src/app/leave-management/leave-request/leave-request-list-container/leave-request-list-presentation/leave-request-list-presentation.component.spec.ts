import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveRequestListPresentationComponent } from './leave-request-list-presentation.component';

describe('LeaveRequestListPresentationComponent', () => {
  let component: LeaveRequestListPresentationComponent;
  let fixture: ComponentFixture<LeaveRequestListPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveRequestListPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveRequestListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

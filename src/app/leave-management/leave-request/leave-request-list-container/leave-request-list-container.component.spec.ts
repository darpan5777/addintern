import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveRequestListContainerComponent } from './leave-request-list-container.component';

describe('LeaveRequestListContainerComponent', () => {
  let component: LeaveRequestListContainerComponent;
  let fixture: ComponentFixture<LeaveRequestListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveRequestListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveRequestListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

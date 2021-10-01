import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveListContainerComponent } from './leave-list-container.component';

describe('LeaveListContainerComponent', () => {
  let component: LeaveListContainerComponent;
  let fixture: ComponentFixture<LeaveListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

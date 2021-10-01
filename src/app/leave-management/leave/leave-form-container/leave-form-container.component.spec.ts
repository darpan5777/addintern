import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveFormContainerComponent } from './leave-form-container.component';

describe('LeaveFormContainerComponent', () => {
  let component: LeaveFormContainerComponent;
  let fixture: ComponentFixture<LeaveFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveFormContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

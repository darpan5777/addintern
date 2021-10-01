import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveListPresentationComponent } from './leave-list-presentation.component';

describe('LeaveListPresentationComponent', () => {
  let component: LeaveListPresentationComponent;
  let fixture: ComponentFixture<LeaveListPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveListPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

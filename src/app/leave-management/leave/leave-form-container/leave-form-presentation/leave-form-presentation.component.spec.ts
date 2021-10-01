import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveFormPresentationComponent } from './leave-form-presentation.component';

describe('LeaveFormPresentationComponent', () => {
  let component: LeaveFormPresentationComponent;
  let fixture: ComponentFixture<LeaveFormPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveFormPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveFormPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

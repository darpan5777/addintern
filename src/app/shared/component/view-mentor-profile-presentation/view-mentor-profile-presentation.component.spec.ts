import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMentorProfilePresentationComponent } from './view-mentor-profile-presentation.component';

describe('ViewMentorProfilePresentationComponent', () => {
  let component: ViewMentorProfilePresentationComponent;
  let fixture: ComponentFixture<ViewMentorProfilePresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMentorProfilePresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMentorProfilePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

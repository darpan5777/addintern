import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInternProfilePresentationComponent } from './view-intern-profile-presentation.component';

describe('ViewInternProfilePresentationComponent', () => {
  let component: ViewInternProfilePresentationComponent;
  let fixture: ComponentFixture<ViewInternProfilePresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewInternProfilePresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInternProfilePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

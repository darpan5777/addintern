import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRevokingRequestPresentationComponent } from './view-revoking-request-presentation.component';

describe('ViewRevokingRequestPresentationComponent', () => {
  let component: ViewRevokingRequestPresentationComponent;
  let fixture: ComponentFixture<ViewRevokingRequestPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRevokingRequestPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRevokingRequestPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

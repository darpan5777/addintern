import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternFormPresentationComponent } from './intern-form-presentation.component';

describe('InternFormPresentationComponent', () => {
  let component: InternFormPresentationComponent;
  let fixture: ComponentFixture<InternFormPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternFormPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternFormPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

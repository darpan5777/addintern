import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternFormContainerComponent } from './intern-form-container.component';

describe('InternFormContainerComponent', () => {
  let component: InternFormContainerComponent;
  let fixture: ComponentFixture<InternFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternFormContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

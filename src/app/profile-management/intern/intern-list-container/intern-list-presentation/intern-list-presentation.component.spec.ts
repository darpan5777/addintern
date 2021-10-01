import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternListPresentationComponent } from './intern-list-presentation.component';

describe('InternListPresentationComponent', () => {
  let component: InternListPresentationComponent;
  let fixture: ComponentFixture<InternListPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternListPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

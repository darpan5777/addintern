import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternListContainerComponent } from './intern-list-container.component';

describe('InternListContainerComponent', () => {
  let component: InternListContainerComponent;
  let fixture: ComponentFixture<InternListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

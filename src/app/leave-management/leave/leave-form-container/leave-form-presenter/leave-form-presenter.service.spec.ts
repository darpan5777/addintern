import { TestBed } from '@angular/core/testing';

import { LeaveFormPresenterService } from './leave-form-presenter.service';

describe('LeaveFormPresenterService', () => {
  let service: LeaveFormPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaveFormPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

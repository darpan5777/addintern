import { TestBed } from '@angular/core/testing';

import { LeaveRequestListPresenterService } from './leave-request-list-presenter.service';

describe('LeaveRequestListPresenterService', () => {
  let service: LeaveRequestListPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaveRequestListPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

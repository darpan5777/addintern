import { TestBed } from '@angular/core/testing';

import { LeaveListPresenterService } from './leave-list-presenter.service';

describe('LeaveListPresenterService', () => {
  let service: LeaveListPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaveListPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

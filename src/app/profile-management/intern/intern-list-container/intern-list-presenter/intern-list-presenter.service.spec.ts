import { TestBed } from '@angular/core/testing';

import { InternListPresenterService } from './intern-list-presenter.service';

describe('InternListPresenterService', () => {
  let service: InternListPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InternListPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

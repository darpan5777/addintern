import { TestBed } from '@angular/core/testing';

import { InternFormPresenterService } from './intern-form-presenter.service';

describe('InternFormPresenterService', () => {
  let service: InternFormPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InternFormPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

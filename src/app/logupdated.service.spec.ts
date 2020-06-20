import { TestBed } from '@angular/core/testing';

import { LogupdatedService } from './logupdated.service';

describe('LogupdatedService', () => {
  let service: LogupdatedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogupdatedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

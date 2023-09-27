import { TestBed } from '@angular/core/testing';

import { ServicesbookedService } from './servicesbooked.service';

describe('ServicesbookedService', () => {
  let service: ServicesbookedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesbookedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

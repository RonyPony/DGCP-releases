import { TestBed } from '@angular/core/testing';

import { ReleasesServicesService } from './releases-services.service';

describe('ReleasesServicesService', () => {
  let service: ReleasesServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReleasesServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

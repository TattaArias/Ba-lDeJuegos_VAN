import { TestBed } from '@angular/core/testing';

import { InformacionGeneralService } from './informacion-general.service';

describe('InformacionGeneralService', () => {
  let service: InformacionGeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformacionGeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

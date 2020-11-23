import { TestBed } from '@angular/core/testing';

import { DatosCuriososService } from './datos-curiosos.service';

describe('DatosCuriososService', () => {
  let service: DatosCuriososService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosCuriososService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

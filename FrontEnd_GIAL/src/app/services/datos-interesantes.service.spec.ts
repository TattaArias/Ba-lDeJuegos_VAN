import { TestBed } from '@angular/core/testing';

import { DatosInteresantesService } from './datos-interesantes.service';

describe('DatosInteresantesService', () => {
  let service: DatosInteresantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosInteresantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

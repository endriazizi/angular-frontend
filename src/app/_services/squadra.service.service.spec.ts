import { TestBed } from '@angular/core/testing';

import { Squadra.ServiceService } from './squadra.service.service';

describe('Squadra.ServiceService', () => {
  let service: Squadra.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Squadra.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { EventoserviceService } from './eventoservice.service';

describe('EventoserviceService', () => {
  let service: EventoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

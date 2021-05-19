import { TestBed } from '@angular/core/testing';

import { DisiplinaService } from './disiplina.service';

describe('DisiplinaService', () => {
  let service: DisiplinaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisiplinaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

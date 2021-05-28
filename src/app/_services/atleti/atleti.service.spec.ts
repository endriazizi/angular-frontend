import { TestBed } from '@angular/core/testing';

import { AtletiService } from './atleti.service';

describe('AtletiService', () => {
  let service: AtletiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtletiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ReadmoreService } from './readmore.service';

describe('ReadmoreService', () => {
  let service: ReadmoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadmoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

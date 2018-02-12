import { TestBed, inject } from '@angular/core/testing';

import { InactiveDealService } from './inactive-deal.service';

describe('InactiveDealService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InactiveDealService]
    });
  });

  it('should be created', inject([InactiveDealService], (service: InactiveDealService) => {
    expect(service).toBeTruthy();
  }));
});

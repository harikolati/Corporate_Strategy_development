import { TestBed, inject } from '@angular/core/testing';

import { FollowedDealService } from './followed-deal.service';

describe('FollowedDealService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FollowedDealService]
    });
  });

  it('should be created', inject([FollowedDealService], (service: FollowedDealService) => {
    expect(service).toBeTruthy();
  }));
});

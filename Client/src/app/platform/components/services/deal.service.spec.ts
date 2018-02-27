import { TestBed, inject } from '@angular/core/testing';

import { DealService } from './deal.service';
import { HttpModule } from '@angular/http';
describe('DealService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      
    imports : [HttpModule],
      providers: [DealService]
    });
  });

  it('should be created', inject([DealService], (service: DealService) => {
    expect(service).toBeTruthy();
  }));
});
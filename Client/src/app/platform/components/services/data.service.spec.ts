import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';

describe('DealurlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpModule],
      providers: [DataService]
    });
  });

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));
});

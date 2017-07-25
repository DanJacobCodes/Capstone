import { TestBed, inject } from '@angular/core/testing';

import { HomeStatsService } from './home-stats.service';

describe('HomeStatsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeStatsService]
    });
  });

  it('should ...', inject([HomeStatsService], (service: HomeStatsService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { VillaService } from './villa.service';

describe('VillaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VillaService]
    });
  });

  it('should be created', inject([VillaService], (service: VillaService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { SofaService } from './sofa.service';

describe('SofaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SofaService = TestBed.get(SofaService);
    expect(service).toBeTruthy();
  });
});

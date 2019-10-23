import { TestBed } from '@angular/core/testing';

import { MocktailsService } from './mocktails.service';

describe('MocktailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MocktailsService = TestBed.get(MocktailsService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TransferencesService } from './transferences.service';

describe('TransferencesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransferencesService = TestBed.get(TransferencesService);
    expect(service).toBeTruthy();
  });
});

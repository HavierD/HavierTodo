import { TestBed } from '@angular/core/testing';

import { DataOperatorService } from './data-operator.service';

describe('DataOperatorService', () => {
  let service: DataOperatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataOperatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

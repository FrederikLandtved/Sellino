import { TestBed } from '@angular/core/testing';

import { TextPageSectionService } from './text-page-section.service';

describe('TextPageSectionService', () => {
  let service: TextPageSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextPageSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

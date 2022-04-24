import { TestBed } from '@angular/core/testing';

import { SpeakerapicallService } from './speakerapicall.service';

describe('SpeakerapicallService', () => {
  let service: SpeakerapicallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeakerapicallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

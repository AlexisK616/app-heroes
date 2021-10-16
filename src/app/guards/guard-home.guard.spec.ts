import { TestBed } from '@angular/core/testing';

import { GuardHomeGuard } from './guard-home.guard';

describe('GuardHomeGuard', () => {
  let guard: GuardHomeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardHomeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

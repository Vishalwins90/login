import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { unauthGuard } from './unauth.guard';

describe('unauthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => unauthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

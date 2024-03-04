import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { resloveGuard } from './reslove.guard';

describe('resloveGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => resloveGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

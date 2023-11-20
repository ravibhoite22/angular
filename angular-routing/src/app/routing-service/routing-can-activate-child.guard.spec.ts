import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { routingCanActivateChildGuard } from './routing-can-activate-child.guard';

describe('routingCanActivateChildGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => routingCanActivateChildGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

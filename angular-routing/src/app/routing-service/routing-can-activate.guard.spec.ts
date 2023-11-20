import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { routingCanActivateGuard } from './routing-can-activate.guard';

describe('routingCanActivateGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => routingCanActivateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

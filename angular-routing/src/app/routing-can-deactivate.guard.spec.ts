import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { routingCanDeactivateGuard } from './routing-can-deactivate.guard';

describe('routingCanDeactivateGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => routingCanDeactivateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

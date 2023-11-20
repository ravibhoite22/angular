import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const routingCanActivateGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  let userRole = 'admin';
  if (userRole !== 'admin') {
    router.navigate(['page-not-found']);
  }
  return true;
};

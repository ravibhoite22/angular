import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const routingCanActivateChildGuard: CanActivateChildFn = (route, state) => {
  let router = inject(Router);
  let userRole = 'user';
  if (userRole !== 'admin') {
    router.navigate(['page-not-found']);
    return false;
  }
  return true;
};
 
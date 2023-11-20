import { CanDeactivateFn } from '@angular/router';

export const routingCanDeactivateGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  let response = confirm('Are you sure you want to leave!');
  if (response == true) {
    return true;
  } else {
    return false;
  }
};

import { CanActivateFn } from '@angular/router';

export const resetGuard: CanActivateFn = (route, state) => {
  return true;
};

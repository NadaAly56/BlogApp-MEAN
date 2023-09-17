import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { signed } from 'src/utilis';

export const authGuard: CanActivateFn = (route, state) => {

  if(signed())
  return true;
  else {
    inject(Router).navigate(['notallowed'])
    return false
  }
};

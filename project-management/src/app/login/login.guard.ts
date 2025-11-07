import { CanActivateFn, Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {

  //const usersService = new UsersService();
  
  console.log('gililmeye çalışılan URL:', route.url.join('/'));

  let usersService = inject(UsersService);

  usersService.returnUrl = route.url.join('/');

  let router = inject(Router);
  if (!usersService.isUserLoggedIn) {
    router.navigate(['login']);    
    return false;
  }
  return true;
};

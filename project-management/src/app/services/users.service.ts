import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  isUserLoggedIn: boolean = false;
  returnUrl: string = '';
 
  validateUser(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      this.isUserLoggedIn = true;
      return true;
    }
    return false;
  }
  

  constructor() { }
}

import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private usersService: UsersService, private router: Router) { }

  login(name:string, password:string): void {
    console.log('Login butonuna tıklandı');
    let isLoggedIn = this.usersService.validateUser(name, password);
    console.log('Kullanıcı doğrulama sonucu:', isLoggedIn);
    if (isLoggedIn) {
       console.log('Gidilecek sauyfa:', this.usersService.returnUrl);
      this.router.navigate([this.usersService.returnUrl]);
     
    }
  }

}

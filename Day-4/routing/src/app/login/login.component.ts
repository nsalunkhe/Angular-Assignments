import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  onLogin(): void {
    const isAuthenticated = this.userService.login(this.username, this.password);

    if (isAuthenticated) {
      this.loginError = false;
      this.router.navigate(['/home']);
    } else {
      this.loginError = true;
    }
  }
}

import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email: string = '';
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) {}

  onSignup(): void {
    if (!this.email || !this.username || !this.password) {
      this.errorMessage = 'All fields are required.';
      return;
    }

    this.userService.signup(this.email, this.username, this.password);
    this.router.navigate(['/login']);
  }
}

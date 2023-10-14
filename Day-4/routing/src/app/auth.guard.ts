import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.userService.isAuthenticated()) {
      return true; // User is authenticated, allow access
    } else {
      // Redirect to login or handle authentication logic
      // Navigate to the login page
      this.router.navigate(['/login']);
      return false; // User is not authenticated, deny access and redirect to login
    }
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly TOKEN_KEY = 'auth_token';
  private users: User[] = [];
  private authenticatedUser: User | null = null;

  constructor() {}

  signup(email: string, username: string, password: string): void {
    const newUser: User = { email, username, password };
    this.users.push(newUser);

    // For simplicity, assume a successful signup generates a token
    const token = this.generateToken();
    localStorage.setItem(this.TOKEN_KEY, token);

    // Store user information in localStorage
    localStorage.setItem('user', JSON.stringify(newUser));
  }

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);

    if (user) {
      const token = this.generateToken();
      localStorage.setItem(this.TOKEN_KEY, token);

      // Store user information in localStorage
      localStorage.setItem('user', JSON.stringify(user));

      return true;
    } else {
      this.authenticatedUser = null; // Make sure to reset authenticatedUser if login fails
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem('user');
  }

  isAuthenticated(): boolean {
    return localStorage.getItem(this.TOKEN_KEY) !== null;
  }

  // Helper function to generate a token (replace with your actual logic)
  private generateToken(): string {
    // This is a simple example; replace with a proper token generation mechanism
    return 'your_generated_token';
  }

  getAuthenticatedUser(): User | null {
    const userString = localStorage.getItem('user');
  
    if (userString) {
      return JSON.parse(userString) as User;
    } else {
      return null;
    }
  }
}

interface User {
  email: string;
  username: string;
  password: string;
}

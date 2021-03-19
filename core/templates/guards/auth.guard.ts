import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from 'services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private router: Router
  ) {}
  async canActivate(): Promise<boolean> {
    // Throw new Error('Method not implemented.');
    const user = await this.userService.getUserInfoAsync();
    if (user.isLoggedIn) {
      return true;
    }
    this.router.navigate(['about']);
    return false;
  }
}

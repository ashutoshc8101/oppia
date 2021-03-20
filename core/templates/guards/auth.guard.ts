import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { WindowRef } from 'services/contextual/window-ref.service';

class MockUserInfo {
  isLoggedIn(): boolean {
    return false;
  }

  isModerator(): boolean {
    return true;
  }

  isAdmin(): boolean {
    return false;
  }

  isSuperAdmin(): boolean {
    return false;
  }
}

class MockUserService {
  async getUserInfoAsync(): Promise <MockUserInfo> {
    return new Promise((resolve, reject) => {
      resolve(new MockUserInfo());
    });
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private userService = new MockUserService();
  constructor(
    private router: Router,
    private windowRef: WindowRef
  ) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Promise<boolean> {
    return this.userService.getUserInfoAsync().then((user) => {
      if (route.data.roles.indexOf('user') > -1) {
        if (user.isLoggedIn()) {
          return true;
        } else {
          this.windowRef.nativeWindow.location.assign('/');
          return true;
        }
      }

      if (route.data.roles.indexOf('moderator') > -1) {
        if (user.isModerator()) {
          return true;
        }
      }

      if (route.data.roles.indexOf('admin') > -1) {
        if (user.isAdmin()) {
          return true;
        }
      }

      if (route.data.roles.indexOf('superadmin') > -1) {
        if (user.isSuperAdmin()) {
          return true;
        }
      }

      this.router.navigate(['not-found']);
      return false;
    }, (error) => {
      return false;
    });
  }
}

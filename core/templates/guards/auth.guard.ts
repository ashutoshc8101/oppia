import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { WindowRef } from 'services/contextual/window-ref.service';
import { UserService } from 'services/user.service';

class MockUserInfo {
  isLoggedIn(): boolean {
    return true;
  }

  canCreateCollections(): boolean {
    return true;
  }

  isTopicManager(): boolean {
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
export class AuthGuard implements CanLoad, CanActivate {
  private userService = new MockUserService();

  constructor(
    private router: Router,
    private windowRef: WindowRef
  ) {}

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree |
  Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {
    return this.userService.getUserInfoAsync().then((user) => {
      if (route.data.roles.indexOf('user') > -1) {
        if (user.isLoggedIn()) {
          return true;
        } else {
          this.windowRef.nativeWindow.location.assign('/signup');
          return false;
        }
      }

      if (route.data.roles.indexOf('collection-editor') > -1 &&
        user.canCreateCollections()) {
        return true;
      }

      if (route.data.roles.indexOf('topic-manager') > -1 &&
      user.isTopicManager()) {
        return true;
      }

      if (route.data.roles.indexOf('moderator') > -1 && user.isModerator()) {
        return true;
      }

      if (route.data.roles.indexOf('admin') > -1 && user.isAdmin()) {
        return true;
      }

      if (route.data.roles.indexOf('superadmin') > -1 && user.isSuperAdmin()) {
        return true;
      }

      this.router.navigate(['not-found']);
      return false;
    }, (error) => {
      return false;
    });
  }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Promise<boolean | UrlTree> {
    return this.userService.getUserInfoAsync().then((user) => {
      if (route.data.roles.indexOf('user') > -1) {
        if (user.isLoggedIn()) {
          return true;
        } else {
          this.windowRef.nativeWindow.location.assign('/');
          return false;
        }
      }

      if (route.data.roles.indexOf('collection-editor') > -1 &&
        user.canCreateCollections()) {
        return true;
      }

      if (route.data.roles.indexOf('topic-manager') > -1 &&
      user.isTopicManager()) {
        return true;
      }

      if (route.data.roles.indexOf('moderator') > -1 && user.isModerator()) {
        return true;
      }

      if (route.data.roles.indexOf('admin') > -1 && user.isAdmin()) {
        return true;
      }

      if (route.data.roles.indexOf('superadmin') > -1 && user.isSuperAdmin()) {
        return true;
      }

      this.router.navigate(['not-found']);
      return false;
    }, (error) => {
      return false;
    });
  }
}

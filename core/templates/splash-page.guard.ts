import { AppConstants } from "app.constants";
import { UserInfo } from "domain/user/user-info.model";

export class SplashPageRouteGuard implements CanLoad, CanActivate {
  constructor(
    private userService: UserService,
    private router: Router,
    private windowRef: WindowRef
  ) {}

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree |
  Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {
    return this.classroomBackendApiService.getClassroomPageAccessibilityStatus()
      .then(resp => {
        if (resp.classroom_page_is_enabled) {
          return true;
        }

        this.router.redirect(['not-found']);
        return false;
      });
  }
}

import constants from "assets/constants";
import { UserInfo } from "node:os";

export class AuthGuard implements CanLoad, CanActivate {
 constructor(
   private userService: UserService,
   private router: Router,
   private windowRef: WindowRef
 ) {}

 canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree |
 Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {
   return this.userService.getUserInfoAsync().then((user: UserInfo) => {
     if (route.data.roles.indexOf(constants.ROLES_DATA.ROLE_ID_EXPLORATION_EDITOR) > -1 &&
     route.data.roles.length === 1) {
       if (user.isLoggedIn()) {
         return true;
       } else {
         this.windowRef.nativeWindow.location.assign('/login?return_url=%2F');
         return false;
       }
     }

     for (let i = 0; i < route.data.roles.length; i++) {
       for (let k = 0; k < user.getRoles().length; k++) {
         if (route.data.roles[i] === user.getRoles()[k]) {
           return true;
         }
       }
     }

     this.router.navigate(['not-found']);
     return false;
   }, (error) => {
     return false;
   });
 }

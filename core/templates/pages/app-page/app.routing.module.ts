import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AuthGuard } from 'core/templates/guards/auth.guard';
import { AboutPageComponent } from 'pages/about-page/about-page.component';
import { DonatePageComponent } from 'pages/donate-page/donate-page.component';
import { ErrorPageComponent } from 'pages/error-pages/error-page.component';
import { AdminComponent } from './components/admin.component';
import { LoggedInComponent } from './components/loggedIn.component';
import { MaintainerComponent } from './components/maintainer.component';
import { SuperAdminComponent } from './components/suger-admin';


const routes: Route[] = [
  {
    path: 'donate',
    component: DonatePageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'credits',
    redirectTo: 'about'
  },
  {
    path: 'loggedIn',
    canActivate: [AuthGuard],
    data: { roles: ['user'] },
    component: LoggedInComponent
  },
  {
    path: 'maintainer-role',
    canActivate: [AuthGuard],
    data: { roles: ['moderator', 'admin'] },
    component: MaintainerComponent
  },
  {
    path: 'admin-role',
    canActivate: [AuthGuard],
    data: { roles: ['admin', 'superadmin'] },
    component: AdminComponent
  },
  {
    path: 'super-admin-role',
    canActivate: [AuthGuard],
    data: { roles: ['superadmin'] },
    component: SuperAdminComponent
  },
  {
    path: 'not-found',
    component: ErrorPageComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/'
    }
  ]
})
export class AppRoutingModule {

}

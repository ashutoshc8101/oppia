import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AboutPageComponent } from 'pages/about-page/about-page.component';
import { DonatePageComponent } from 'pages/donate-page/donate-page.component';
import { ErrorPageComponent } from 'pages/error-pages/error-page.component';


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
    path: '**',
    component: ErrorPageComponent
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

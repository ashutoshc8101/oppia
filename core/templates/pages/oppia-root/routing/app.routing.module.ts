import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ErrorPageRootComponent } from 'pages/error-pages/error-page-root.component';

const routes: Route[] = [
  {
    path: '**',
    component: ErrorPageRootComponent
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

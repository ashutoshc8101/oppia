import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DonatePageRootComponent } from './donate-page-root.component';

const routes: Route[] = [
  {
    path: '',
    component: DonatePageRootComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class DonatePageRoutingModule {}

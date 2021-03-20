import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DonatePageComponent } from './donate-page.component';

const routes: Route[] = [
  {
    path: '',
    component: DonatePageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})

export class DonatePageRoutingModule {}

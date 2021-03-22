import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuard } from 'core/templates/guards/auth.guard';
import { AboutPageModule } from 'pages/about-page/about-page.module';
import { ErrorPageModule } from 'pages/error-pages/error-page.module';
import { AppRootComponent } from './app-root.component';
import { AppRoutingModule } from './app.routing.module';
import { AdminComponent } from './components/admin.component';
import { LoggedInComponent } from './components/loggedIn.component';
import { MaintainerComponent } from './components/maintainer.component';
import { SuperAdminComponent } from './components/suger-admin';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutPageModule,
    ErrorPageModule,
  ],
  declarations: [
    AppRootComponent,
    AdminComponent,
    LoggedInComponent,
    MaintainerComponent,
    SuperAdminComponent
  ],
  bootstrap: [
    AppRootComponent
  ],
  providers: [
    AuthGuard
  ]
})
export class AppModule {
  ngDoBootstrap(): void { }
}

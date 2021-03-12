import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslatePipe } from 'filters/translate.pipe';
import { AboutPageModule } from 'pages/about-page/about-page.module';
import { DonatePageModule } from 'pages/donate-page/donate-page.module';
import { ErrorPageModule } from 'pages/error-pages/error-page.module';
import { AppRootComponent } from './app-root.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    DonatePageModule,
    AboutPageModule,
    ErrorPageModule,
  ],
  declarations: [
    AppRootComponent
  ],
  bootstrap: [
    AppRootComponent
  ]
})
export class AppModule {
  ngDoBootstrap(): void { }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppNavigationComponent } from './nav/nav.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AppNavigationComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppNavigationModule } from './nav/nav.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AppNavigationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

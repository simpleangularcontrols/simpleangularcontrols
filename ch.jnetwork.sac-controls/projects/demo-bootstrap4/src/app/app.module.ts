import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavigationModule } from './nav/nav.module';
import { LANGUAGE_SERVICE } from '@simpleangularcontrols/sac-common';
import { ControlsLanguageService } from './services/controlslanguage.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AppNavigationModule],
  providers: [{ provide: LANGUAGE_SERVICE, useClass: ControlsLanguageService }],
  bootstrap: [AppComponent],
})
export class AppModule {}

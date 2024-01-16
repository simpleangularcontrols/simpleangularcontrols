import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  SACCONFIGURATION_SERVICE,
  SACLANGUAGE_SERVICE,
} from '@simpleangularcontrols/sac-common';
import { AppNavigationComponent } from './nav/nav.component';
import { ControlsLanguageService } from './services/controlslanguage.service';
import { CustomConfigurationService } from './services/customconfiguration.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AppNavigationComponent],
  providers: [
    { provide: SACLANGUAGE_SERVICE, useClass: ControlsLanguageService },
    { provide: SACCONFIGURATION_SERVICE, useClass: CustomConfigurationService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

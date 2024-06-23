import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  SACCONFIGURATION_SERVICE,
  SACLANGUAGE_SERVICE,
} from '@simpleangularcontrols/sac-common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavigationModule } from './nav/nav.module';
import { ControlsLanguageService } from './services/controlslanguage.service';
import { CustomConfigurationService } from './services/customconfiguration.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AppNavigationModule],
  providers: [
    { provide: SACLANGUAGE_SERVICE, useClass: ControlsLanguageService },
    { provide: SACCONFIGURATION_SERVICE, useClass: CustomConfigurationService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

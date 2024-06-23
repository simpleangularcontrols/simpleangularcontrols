import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppNavigationModule } from './nav/nav.module';

import { SACCONFIGURATION_SERVICE } from '@simpleangularcontrols/sac-common';
import { AppComponent } from './app.component';
import { CustomConfigurationService } from './services/customconfiguration.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AppNavigationModule],
  providers: [
    { provide: SACCONFIGURATION_SERVICE, useClass: CustomConfigurationService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

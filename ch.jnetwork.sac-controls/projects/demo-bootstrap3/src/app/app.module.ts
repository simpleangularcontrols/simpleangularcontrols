import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { SACCONFIGURATION_SERVICE } from '@simpleangularcontrols/sac-common';
import { AppComponent } from './app.component';
import { AppNavigationComponent } from './nav/nav.component';
import { CustomConfigurationService } from './services/customconfiguration.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AppNavigationComponent],
  providers: [
    { provide: SACCONFIGURATION_SERVICE, useClass: CustomConfigurationService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavigationComponent } from './nav/nav.component';
import { ControlsLanguageService } from './services/controlslanguage.service';
import { CustomConfigurationService } from './services/customconfiguration.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SACCONFIGURATION_SERVICE, SACLANGUAGE_SERVICE } from '@simpleangularcontrols/sac-common';

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

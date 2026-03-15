import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavigationModule } from './nav/nav.module';
import { CustomConfigurationService } from './services/customconfiguration.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SACCONFIGURATION_SERVICE } from '@simpleangularcontrols/sac-common';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, AppNavigationModule],
    providers: [{ provide: SACCONFIGURATION_SERVICE, useClass: CustomConfigurationService }],
    bootstrap: [AppComponent],
})
export class AppModule {}

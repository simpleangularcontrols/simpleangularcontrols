import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// Third Party Extensions
import { ToastrModule } from 'ngx-toastr';
import { UploadxModule } from 'ngx-uploadx';

// Internal Components and Services
import { UserComponent } from './modules/UserComponent';
import { UserService } from './services/UserService';
import { AuthenticationService } from './services/AuthenticationService';
import { GridService } from './services/GridService';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/TokenInterceptor';

// Example Controls
import { ExampleGridComponent, TempDirective } from './controls/grid';
import { ExampleDialogComponent } from './controls/dialog';
import { SubFormComponent } from './controls/subform.component';
import { ExampleMultiLanguageInputComponent } from './controls/multilanguageinput.component';
import { ExampleUploadComponent } from './controls/upload.component';

import { LANGUAGE_SERVICE } from '@jnetwork/sac-common';
import { ControlsLanguageService } from './services/language.service';
// import localeDeCh from '@angular/common/locales/de-CH';

const NgDirectives = [
  AppComponent, UserComponent,

  ExampleGridComponent, ExampleDialogComponent, ExampleUploadComponent, ExampleMultiLanguageInputComponent, TempDirective, SubFormComponent
];

// import {
//  JNetworkBootstrap3FormModule,
//  JNetworkBootstrap3ButtonModule,
//  JNetworkBootstrap3DialogModule,
//  JNetworkBootstrap3CheckboxModule,
//  JNetworkBootstrap3ListModule,
//  JNetworkBootstrap3ValidationSummaryModule,
//  JNetworkBootstrap3TabsModule,
//  JNetworkBootstrap3InputModule,
//  JNetworkBootstrap3DateTimeModule,
//  JNetworkBootstrap3TinyMceModule,
//  JNetworkBootstrap3GridModule,
//  // JNetworkBootstrap4StaticLabelModule,
//  JNetworkBootstrap3WizardModule,
//  JNetworkBootstrap3ConfirmModule,
//  JNetworkBootstrap3UploadModule
// } from '@jnetwork/sac-bootstrap3';

import {
  JNetworkBootstrap4FormModule,
  JNetworkBootstrap4ButtonModule,
  JNetworkBootstrap4DialogModule,
  JNetworkBootstrap4CheckboxModule,
  JNetworkBootstrap4ListModule,
  JNetworkBootstrap4ValidationSummaryModule,
  JNetworkBootstrap4TabsModule,
  JNetworkBootstrap4InputModule,
  JNetworkBootstrap4DateTimeModule,
  JNetworkBootstrap4TinyMceModule,
  JNetworkBootstrap4GridModule,
  // JNetworkBootstrap4StaticLabelModule,
  JNetworkBootstrap4WizardModule,
  JNetworkBootstrap4ConfirmModule,
  JNetworkBootstrap4UploadModule,
  JNetworkBootstrap4MultilanguageModule
} from '@jnetwork/sac-bootstrap4';

@NgModule({
  declarations: [
    NgDirectives
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    HttpClientModule,
    ToastrModule.forRoot(),

    // Exanic Controls
    // JNetworkBootstrap3FormModule,
    // JNetworkBootstrap3ButtonModule,
    // JNetworkBootstrap3DialogModule,
    // JNetworkBootstrap3CheckboxModule,
    // JNetworkBootstrap3ListModule,
    // JNetworkBootstrap3ValidationSummaryModule,
    // JNetworkBootstrap3TabsModule,
    // JNetworkBootstrap3InputModule,
    // JNetworkBootstrap3DateTimeModule,
    // JNetworkBootstrap3TinyMceModule,
    // JNetworkBootstrap3GridModule,
    // JNetworkBootstrap4StaticLabelModule,
    // JNetworkBootstrap3WizardModule,
    // JNetworkBootstrap3UploadModule,
    // JNetworkBootstrap3ConfirmModule.forRoot(),

    // Exanic Controls
    JNetworkBootstrap4FormModule,
    JNetworkBootstrap4ButtonModule,
    JNetworkBootstrap4DialogModule,
    JNetworkBootstrap4CheckboxModule,
    JNetworkBootstrap4ListModule,
    JNetworkBootstrap4ValidationSummaryModule,
    JNetworkBootstrap4TabsModule,
    JNetworkBootstrap4InputModule,
    JNetworkBootstrap4DateTimeModule,
    JNetworkBootstrap4TinyMceModule,
    JNetworkBootstrap4GridModule,
    // JNetworkBootstrap4StaticLabelModule,
    JNetworkBootstrap4WizardModule,
    JNetworkBootstrap4UploadModule,
    JNetworkBootstrap4MultilanguageModule,
    JNetworkBootstrap4ConfirmModule.forRoot(),


    // Third Party Modules
    UploadxModule
  ],
  providers: [UserService, AuthenticationService, GridService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },
    { provide: LANGUAGE_SERVICE, useClass: ControlsLanguageService }], // /*{ provide: LOCALE_ID, useValue: 'de-CH' }*/],
  bootstrap: [AppComponent]
})
export class AppModule { }

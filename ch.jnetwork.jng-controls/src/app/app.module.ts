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
//  SACBootstrap3FormModule,
//  SACBootstrap3ButtonModule,
//  SACBootstrap3DialogModule,
//  SACBootstrap3CheckboxModule,
//  SACBootstrap3ListModule,
//  SACBootstrap3ValidationSummaryModule,
//  SACBootstrap3TabsModule,
//  SACBootstrap3InputModule,
//  SACBootstrap3DateTimeModule,
//  SACBootstrap3TinyMceModule,
//  SACBootstrap3GridModule,
//  // SACBootstrap4StaticLabelModule,
//  SACBootstrap3WizardModule,
//  SACBootstrap3ConfirmModule,
//  SACBootstrap3UploadModule
// } from '@jnetwork/sac-bootstrap3';

import {
  SACBootstrap4FormModule,
  SACBootstrap4ButtonModule,
  SACBootstrap4DialogModule,
  SACBootstrap4CheckboxModule,
  SACBootstrap4ListModule,
  SACBootstrap4ValidationSummaryModule,
  SACBootstrap4TabsModule,
  SACBootstrap4InputModule,
  SACBootstrap4DateTimeModule,
  SACBootstrap4TinyMceModule,
  SACBootstrap4GridModule,
  // SACBootstrap4StaticLabelModule,
  SACBootstrap4WizardModule,
  SACBootstrap4ConfirmModule,
  SACBootstrap4UploadModule,
  SACBootstrap4MultilanguageModule
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
    // SACBootstrap3FormModule,
    // SACBootstrap3ButtonModule,
    // SACBootstrap3DialogModule,
    // SACBootstrap3CheckboxModule,
    // SACBootstrap3ListModule,
    // SACBootstrap3ValidationSummaryModule,
    // SACBootstrap3TabsModule,
    // SACBootstrap3InputModule,
    // SACBootstrap3DateTimeModule,
    // SACBootstrap3TinyMceModule,
    // SACBootstrap3GridModule,
    // SACBootstrap4StaticLabelModule,
    // SACBootstrap3WizardModule,
    // SACBootstrap3UploadModule,
    // SACBootstrap3ConfirmModule.forRoot(),

    // Exanic Controls
    SACBootstrap4FormModule,
    SACBootstrap4ButtonModule,
    SACBootstrap4DialogModule,
    SACBootstrap4CheckboxModule,
    SACBootstrap4ListModule,
    SACBootstrap4ValidationSummaryModule,
    SACBootstrap4TabsModule,
    SACBootstrap4InputModule,
    SACBootstrap4DateTimeModule,
    SACBootstrap4TinyMceModule,
    SACBootstrap4GridModule,
    // SACBootstrap4StaticLabelModule,
    SACBootstrap4WizardModule,
    SACBootstrap4UploadModule,
    SACBootstrap4MultilanguageModule,
    SACBootstrap4ConfirmModule.forRoot(),


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

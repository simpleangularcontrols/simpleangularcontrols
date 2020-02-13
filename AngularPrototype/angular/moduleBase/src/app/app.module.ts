import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// Third Party Extensions
import { ToastrModule } from 'ngx-toastr';
import { TextMaskModule } from 'angular2-text-mask';

// Internal Components and Services
import { UserComponent } from './modules/UserComponent';
import { UserService } from './services/UserService';
import { AuthenticationService } from './services/AuthenticationService';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/TokenInterceptor';

// Example Controls
import { ExampleGrid } from './controls/grid';
import { ExampleDialog } from './controls/dialog';
import { SubFormComponent } from './controls/subform.component';
import { ExampleMultiLanguageInput } from './controls/multilanguageinput.component';

import { LANGUAGE_SERVICE } from '@jnetwork/jngcontrols-common';
import { ControlsLanguageService } from './services/language.service';
// import localeDeCh from '@angular/common/locales/de-CH';

const NgDirectives = [
  AppComponent, UserComponent,

  ExampleGrid, ExampleDialog, SubFormComponent, ExampleMultiLanguageInput
]

//import {
//  jNetworkBootstrap3FormModule,
//  jNetworkBootstrap3ButtonModule,
//  jNetworkBootstrap3DialogModule,
//  jNetworkBootstrap3CheckboxModule,
//  jNetworkBootstrap3ListModule,
//  jNetworkBootstrap3ValidationSummaryModule,
//  jNetworkBootstrap3TabsModule,
//  jNetworkBootstrap3InputModule,
//  jNetworkBootstrap3DateTimeModule,
//  jNetworkBootstrap3TinyMceModule,
//  jNetworkBootstrap3GridModule,
//  // JNetworkBootstrap4StaticLabelModule,
//  jNetworkBootstrap3WizardModule,
//  jNetworkBootstrap3ConfirmModule,
//  jNetworkBootstrap3UploadModule
//} from '@jnetwork/jngcontrols-bootstrap3';

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
  // JNetworkBootstrap4UploadModule,
  JNetworkBootstrap4MultilanguageModule
} from '@jnetwork/jngcontrols-bootstrap4';

import { UploadxModule } from 'ngx-uploadx';



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
    //jNetworkBootstrap3FormModule,
    //jNetworkBootstrap3ButtonModule,
    //jNetworkBootstrap3DialogModule,
    //jNetworkBootstrap3CheckboxModule,
    //jNetworkBootstrap3ListModule,
    //jNetworkBootstrap3ValidationSummaryModule,
    //jNetworkBootstrap3TabsModule,
    //jNetworkBootstrap3InputModule,
    //jNetworkBootstrap3DateTimeModule,
    //jNetworkBootstrap3TinyMceModule,
    //jNetworkBootstrap3GridModule,
    //// JNetworkBootstrap4StaticLabelModule,
    //jNetworkBootstrap3WizardModule,
    //jNetworkBootstrap3UploadModule,
    //jNetworkBootstrap3ConfirmModule.forRoot(),

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
    // JNetworkBootstrap4UploadModule,
    JNetworkBootstrap4MultilanguageModule,
    JNetworkBootstrap4ConfirmModule.forRoot(),


    // Third Party Modules
    TextMaskModule,
    UploadxModule
  ],
  providers: [UserService, AuthenticationService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },
{ provide: LANGUAGE_SERVICE, useClass: ControlsLanguageService }], // /*{ provide: LOCALE_ID, useValue: "de-CH" }*/],
  bootstrap: [AppComponent]
})
export class AppModule { }

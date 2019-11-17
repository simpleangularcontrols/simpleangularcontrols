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
//  // jNetworkBootstrap4StaticLabelModule,
//  jNetworkBootstrap3WizardModule,
//  jNetworkBootstrap3ConfirmModule,
//  jNetworkBootstrap3UploadModule
//} from '@jnetwork/jngcontrols-bootstrap3';

import {
  jNetworkBootstrap4FormModule,
  jNetworkBootstrap4ButtonModule,
  jNetworkBootstrap4DialogModule,
  jNetworkBootstrap4CheckboxModule,
  jNetworkBootstrap4ListModule,
  jNetworkBootstrap4ValidationSummaryModule,
  jNetworkBootstrap4TabsModule,
  jNetworkBootstrap4InputModule,
  jNetworkBootstrap4DateTimeModule,
  jNetworkBootstrap4TinyMceModule,
  jNetworkBootstrap4GridModule,
  // jNetworkBootstrap4StaticLabelModule,
  jNetworkBootstrap4WizardModule,
  jNetworkBootstrap4ConfirmModule,
  // jNetworkBootstrap4UploadModule,
  jNetworkBootstrap4MultilanguageModule
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
    //// jNetworkBootstrap4StaticLabelModule,
    //jNetworkBootstrap3WizardModule,
    //jNetworkBootstrap3UploadModule,
    //jNetworkBootstrap3ConfirmModule.forRoot(),

    // Exanic Controls
    jNetworkBootstrap4FormModule,
    jNetworkBootstrap4ButtonModule,
    jNetworkBootstrap4DialogModule,
    jNetworkBootstrap4CheckboxModule,
    jNetworkBootstrap4ListModule,
    jNetworkBootstrap4ValidationSummaryModule,
    jNetworkBootstrap4TabsModule,
    jNetworkBootstrap4InputModule,
    jNetworkBootstrap4DateTimeModule,
    jNetworkBootstrap4TinyMceModule,
    jNetworkBootstrap4GridModule,
    // jNetworkBootstrap4StaticLabelModule,
    jNetworkBootstrap4WizardModule,
    // jNetworkBootstrap4UploadModule,
    jNetworkBootstrap4MultilanguageModule,
    jNetworkBootstrap4ConfirmModule.forRoot(),


    // Third Party Modules
    TextMaskModule,
    UploadxModule
  ],
  providers: [UserService, AuthenticationService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }], // /*{ provide: LOCALE_ID, useValue: "de-CH" }*/],
  bootstrap: [AppComponent]
})
export class AppModule { }

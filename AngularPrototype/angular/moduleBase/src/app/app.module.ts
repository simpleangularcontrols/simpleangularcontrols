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

// import localeDeCh from '@angular/common/locales/de-CH';

const NgDirectives = [
  AppComponent, UserComponent
]

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
  // jNetworkBootstrap4StaticLabelModule,
  jNetworkBootstrap4WizardModule
} from '@jnetwork/jngcontrols-bootstrap4';





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
    // jNetworkBootstrap4StaticLabelModule,
    jNetworkBootstrap4WizardModule,


    // Third Party Modules
    TextMaskModule
  ],
  providers: [UserService, AuthenticationService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }], // /*{ provide: LOCALE_ID, useValue: "de-CH" }*/],
  bootstrap: [AppComponent]
})
export class AppModule { }

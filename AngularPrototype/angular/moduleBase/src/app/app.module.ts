import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import {
  NgInput, NgInputDecimal, NgInputInteger, NgInputArea, NgInputCurrency, NgInputEmail, NgInputPassword, NgListbox, NgDropdown,
  NgFormular, NgDialog, NgCheckbox, NgButton, NgTab, NgTabItem, NgValidationSummary, NgDate, NgTime, NgDateTime, NgDateSelector, NgRadiobutton, NgRadiobuttons, NgListboxOption
} from './controls';


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
  AppComponent, UserComponent,

  NgInput, NgInputDecimal, NgButton, NgFormular, NgCheckbox, NgDropdown, NgListbox, NgValidationSummary, NgDialog, NgTab, NgDate, NgTime, NgDateTime, NgRadiobutton, NgRadiobuttons,
  NgTabItem, NgDateSelector, NgInputInteger, NgInputCurrency, NgInputEmail, NgInputPassword, NgInputArea, NgListboxOption
]


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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {
  NgInput, NgInputDecimal, NgInputInteger, NgInputArea, NgInputCurrency, NgInputEmail, NgInputPassword, NgListbox, NgDropdown,
  NgFormular, NgDialog, NgCheckbox, NgButton, NgTab, NgTabItem, NgValidationSummary
} from './controls';
import {
  NgEmailValidator, NgMaxValueCurrency, NgMaxValueDecimal, NgMaxValueInteger, NgMinLengthValidator, NgMinValueCurrency, NgMinValueDecimal,
  NgMinValueInteger, NgRequiredDropdown, NgRequiredInput, NgRequiredInputArea, NgRequiredInputCurrency, NgRequiredInputDecimal,
  NgRequiredInputEmail, NgRequiredInputInteger, NgRequiredInputPassword, NgRequiredListbox
} from './validation';

// import localeDeCh from '@angular/common/locales/de-CH';

const NgDirectives = [
  AppComponent,
  NgInput, NgInputDecimal, NgButton, NgFormular, NgCheckbox, NgDropdown, NgListbox, NgValidationSummary, NgRequiredInput, NgRequiredDropdown, NgRequiredListbox, NgDialog, NgTab,
  NgTabItem, NgRequiredInputDecimal, NgInputInteger, NgRequiredInputInteger, NgMinValueDecimal, NgMinValueInteger, NgMaxValueDecimal, NgMaxValueInteger, NgInputCurrency, NgMaxValueCurrency, NgMinValueCurrency, NgRequiredInputCurrency,
  NgInputEmail, NgRequiredInputEmail, NgEmailValidator, NgInputPassword, NgRequiredInputPassword, NgMinLengthValidator, NgInputArea, NgRequiredInputArea
]


@NgModule({
  declarations: [
    NgDirectives
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [/*{ provide: LOCALE_ID, useValue: "de-CH" }*/],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {
  NgInput, NgInputDecimal, NgInputInteger, NgInputArea, NgInputCurrency, NgInputEmail, NgInputPassword, NgListbox, NgDropdown,
  NgFormular, NgDialog, NgCheckbox, NgButton, NgTab, NgTabItem, NgValidationSummary, NgDate, NgDateSelector, NgRadiobutton, NgRadiobuttons, NgListboxOption
} from './controls';


// Third Party Extensions
import { TextMaskModule } from 'angular2-text-mask';

// import localeDeCh from '@angular/common/locales/de-CH';

const NgDirectives = [
  AppComponent,

  NgInput, NgInputDecimal, NgButton, NgFormular, NgCheckbox, NgDropdown, NgListbox, NgValidationSummary, NgDialog, NgTab, NgDate, NgRadiobutton, NgRadiobuttons,
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

    // Third Party Modules
    TextMaskModule
  ],
  providers: [/*{ provide: LOCALE_ID, useValue: "de-CH" }*/],
  bootstrap: [AppComponent]
})
export class AppModule { }

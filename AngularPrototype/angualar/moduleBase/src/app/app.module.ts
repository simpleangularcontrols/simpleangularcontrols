import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgFormular } from './controls/form';
import { NgInput } from './controls/input';
import { NgInputDecimal } from './controls/inputdecimal';
import { NgButton } from './controls/button';
import { NgCheckbox } from './controls/checkbox';
import { NgDropdown } from './controls/dropdown';
import { NgListbox } from './controls/listbox';
import { NgValidationSummary } from './controls/validationsummary';
import { NgRequiredInputDecimal, NgRequiredInput, NgRequiredDropdown, NgRequiredListbox } from './validation/required';
import { NgDialog } from './controls/dialog';
import { NgTab, NgTabItem } from './controls/tabs';

// import localeDeCh from '@angular/common/locales/de-CH';

const NgDirectives = [
  AppComponent,
  NgInput, NgInputDecimal, NgButton, NgFormular, NgCheckbox, NgDropdown, NgListbox, NgValidationSummary, NgRequiredInput, NgRequiredDropdown, NgRequiredListbox, NgDialog, NgTab,
  NgTabItem, NgRequiredInputDecimal
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

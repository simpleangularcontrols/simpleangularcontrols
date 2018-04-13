import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgFormular } from './controls/form';
import { NgInput } from './controls/input';
import { NgButton } from './controls/button';
import { NgCheckbox } from './controls/checkbox';
import { NgDropdown } from './controls/dropdown';

const NgDirectives = [
  AppComponent,
  NgInput, NgButton, NgFormular, NgCheckbox, NgDropdown 
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

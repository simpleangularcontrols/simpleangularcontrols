import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgInput } from './controls/input';
import { NgButton } from './controls/button';

const NgDirectives = [
  AppComponent,
  NgInput, NgButton
]


@NgModule({
  declarations: [
    NgDirectives
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

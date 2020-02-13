import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgCheckboxComponent } from './checkbox';
import { NgRadiobuttonComponent } from './radiobutton';
import { NgRadiobuttonsComponent } from './radiobuttons';

@NgModule({
  declarations: [NgCheckboxComponent, NgRadiobuttonComponent, NgRadiobuttonsComponent],
  imports: [
    BrowserModule
  ],
  exports: [NgCheckboxComponent, NgRadiobuttonComponent, NgRadiobuttonsComponent]
})
export class JNetworkBootstrap3CheckboxModule { }

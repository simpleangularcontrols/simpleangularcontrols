import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgDropdownComponent, NgDropdownOptionDirective } from './dropdown';
import { NgListboxComponent } from './listbox';

@NgModule({
  declarations: [NgDropdownComponent, NgDropdownOptionDirective, NgListboxComponent],
  imports: [
    BrowserModule
  ],
  exports: [NgDropdownComponent, NgDropdownOptionDirective, NgListboxComponent]
})
export class JNetworkBootstrap4ListModule { }

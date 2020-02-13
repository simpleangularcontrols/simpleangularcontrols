import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgDropdownComponent, NgDropdownOptionDirective } from './dropdown';
import { NgListboxComponent } from './listbox';
import { JNetworkCommonListboxOptionModule } from '@jnetwork/jngcontrols-common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NgDropdownComponent, NgDropdownOptionDirective, NgListboxComponent],
  imports: [
    BrowserModule, JNetworkCommonListboxOptionModule, FormsModule
  ],
  exports: [NgDropdownComponent, NgDropdownOptionDirective, NgListboxComponent]
})
export class JNetworkBootstrap3ListModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgDropdownComponent, NgDropdownOptionDirective } from './dropdown';
import { NgListboxComponent } from './listbox';

@NgModule({
  declarations: [NgDropdownComponent, NgDropdownOptionDirective, NgListboxComponent],
  imports: [
    CommonModule
  ],
  exports: [NgDropdownComponent, NgDropdownOptionDirective, NgListboxComponent]
})
export class JNetworkBootstrap4ListModule { }

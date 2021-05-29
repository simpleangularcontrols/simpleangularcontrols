import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgDropdownComponent, NgDropdownOptionDirective } from './dropdown';
import { NgListboxComponent } from './listbox';
import { JNetworkCommonListboxOptionModule } from '@jnetwork/jngcontrols-common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NgDropdownComponent, NgDropdownOptionDirective, NgListboxComponent],
  imports: [
    CommonModule, JNetworkCommonListboxOptionModule, FormsModule
  ],
  exports: [NgDropdownComponent, NgDropdownOptionDirective, NgListboxComponent]
})
export class JNetworkBootstrap3ListModule { }

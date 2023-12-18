import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgDropdownComponent, NgDropdownOptionDirective } from './dropdown';
import { NgListboxComponent } from './listbox';
import { SACCommonListboxOptionModule } from '@jnetwork/sac-common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NgDropdownComponent, NgDropdownOptionDirective, NgListboxComponent],
  imports: [
    CommonModule, SACCommonListboxOptionModule, FormsModule
  ],
  exports: [NgDropdownComponent, NgDropdownOptionDirective, NgListboxComponent]
})
export class SACBootstrap3ListModule { }

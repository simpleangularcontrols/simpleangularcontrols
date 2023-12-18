import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SacDropdownComponent, SacDropdownOptionDirective } from './dropdown';
import { SacListboxComponent } from './listbox';
import { SACCommonListboxOptionModule } from '@jnetwork/sac-common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SacDropdownComponent, SacDropdownOptionDirective, SacListboxComponent],
  imports: [
    CommonModule, SACCommonListboxOptionModule, FormsModule
  ],
  exports: [SacDropdownComponent, SacDropdownOptionDirective, SacListboxComponent]
})
export class SACBootstrap3ListModule { }

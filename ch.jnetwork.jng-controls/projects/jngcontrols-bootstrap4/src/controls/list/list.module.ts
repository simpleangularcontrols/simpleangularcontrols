import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgDropdownComponent, NgDropdownOptionDirective } from './dropdown';
import { NgListboxComponent, NgListboxOptionDirective } from './listbox';

@NgModule({
  declarations: [
    NgDropdownComponent,
    NgDropdownOptionDirective,
    NgListboxComponent,
    NgListboxOptionDirective,
  ],
  imports: [CommonModule],
  exports: [
    NgDropdownComponent,
    NgDropdownOptionDirective,
    NgListboxComponent,
    NgListboxOptionDirective,
  ],
})
export class JNetworkBootstrap4ListModule {}

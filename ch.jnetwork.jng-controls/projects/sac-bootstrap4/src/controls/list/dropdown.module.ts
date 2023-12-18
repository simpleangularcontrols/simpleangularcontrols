import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgDropdownComponent, NgDropdownOptionDirective } from './dropdown';

@NgModule({
  declarations: [
    NgDropdownComponent,
    NgDropdownOptionDirective,
  ],
  imports: [CommonModule],
  exports: [
    NgDropdownComponent,
    NgDropdownOptionDirective,
  ],
})
export class JNetworkBootstrap4DropdownModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SacDropdownComponent, SacDropdownOptionDirective } from './dropdown';

@NgModule({
  declarations: [
    SacDropdownComponent,
    SacDropdownOptionDirective,
  ],
  imports: [CommonModule],
  exports: [
    SacDropdownComponent,
    SacDropdownOptionDirective,
  ],
})
export class SACBootstrap5DropdownModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SacDropdownComponent, SacDropdownOptionDirective } from './dropdown';

@NgModule({
  imports: [CommonModule, SacDropdownComponent, SacDropdownOptionDirective],
  exports: [SacDropdownComponent, SacDropdownOptionDirective],
})
export class SACBootstrap4DropdownModule {}

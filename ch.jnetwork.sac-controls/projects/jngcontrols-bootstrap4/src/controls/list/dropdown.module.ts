import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SACBootstrap4LayoutModule } from '../layout/layout.module';
import { SacDropdownComponent, SacDropdownOptionDirective } from './dropdown';

@NgModule({
  declarations: [SacDropdownComponent, SacDropdownOptionDirective],
  imports: [CommonModule, SACBootstrap4LayoutModule],
  exports: [SacDropdownComponent, SacDropdownOptionDirective],
})
export class SACBootstrap4DropdownModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SACBootstrap5TooltipModule } from '../tooltip/tooltip.module';
import { SacDropdownComponent, SacDropdownOptionDirective } from './dropdown';

@NgModule({
  declarations: [SacDropdownComponent, SacDropdownOptionDirective],
  imports: [
    CommonModule,
    SACBootstrap5LayoutModule,
    SACBootstrap5TooltipModule,
  ],
  exports: [SacDropdownComponent, SacDropdownOptionDirective],
})
export class SACBootstrap5DropdownModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SACBootstrap4LayoutModule } from '../layout/layout.module';
import { SACBootstrap4TooltipModule } from '../tooltip/tooltip.module';
import { SacDropdownComponent, SacDropdownOptionDirective } from './dropdown';

@NgModule({
  declarations: [SacDropdownComponent, SacDropdownOptionDirective],
  imports: [
    CommonModule,
    SACBootstrap4LayoutModule,
    SACBootstrap4TooltipModule,
  ],
  exports: [SacDropdownComponent, SacDropdownOptionDirective],
})
export class SACBootstrap4DropdownModule {}

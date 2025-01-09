import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SACBootstrap5TooltipModule } from '../tooltip/tooltip.module';
import { SacListboxComponent, SacListboxOptionDirective } from './listbox';

@NgModule({
  declarations: [SacListboxComponent, SacListboxOptionDirective],
  imports: [
    CommonModule,
    SACBootstrap5LayoutModule,
    SACBootstrap5TooltipModule,
  ],
  exports: [SacListboxComponent, SacListboxOptionDirective],
})
export class SACBootstrap5ListModule {}

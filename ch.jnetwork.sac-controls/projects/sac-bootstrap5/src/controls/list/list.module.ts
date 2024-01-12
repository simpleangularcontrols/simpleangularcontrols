import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SacListboxComponent, SacListboxOptionDirective } from './listbox';

@NgModule({
  declarations: [SacListboxComponent, SacListboxOptionDirective],
  imports: [CommonModule, SACBootstrap5LayoutModule],
  exports: [SacListboxComponent, SacListboxOptionDirective],
})
export class SACBootstrap5ListModule {}

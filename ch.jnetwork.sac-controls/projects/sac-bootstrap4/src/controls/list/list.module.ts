import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SACBootstrap4LayoutModule } from '../layout/layout.module';
import { SacListboxComponent, SacListboxOptionDirective } from './listbox';

@NgModule({
  declarations: [SacListboxComponent, SacListboxOptionDirective],
  imports: [CommonModule, SACBootstrap4LayoutModule],
  exports: [SacListboxComponent, SacListboxOptionDirective],
})
export class SACBootstrap4ListModule {}

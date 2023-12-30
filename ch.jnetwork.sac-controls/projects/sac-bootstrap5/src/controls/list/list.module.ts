import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SacListboxComponent, SacListboxOptionDirective } from './listbox';

@NgModule({
  declarations: [SacListboxComponent, SacListboxOptionDirective],
  imports: [CommonModule],
  exports: [SacListboxComponent, SacListboxOptionDirective],
})
export class SACBootstrap5ListModule {}

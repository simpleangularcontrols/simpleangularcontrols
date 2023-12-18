import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgListboxComponent, NgListboxOptionDirective } from './listbox';

@NgModule({
  declarations: [NgListboxComponent, NgListboxOptionDirective],
  imports: [CommonModule],
  exports: [NgListboxComponent, NgListboxOptionDirective],
})
export class SACBootstrap4ListModule {}

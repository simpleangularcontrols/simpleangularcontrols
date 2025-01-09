import { NgModule } from '@angular/core';
import { SacTooltipComponent } from '../tooltip/tooltip';
import { SacTinyMceComponent } from './tinymce';

@NgModule({
  imports: [SacTinyMceComponent, SacTooltipComponent],
  exports: [SacTinyMceComponent],
})
export class SACBootstrap3TinyMceModule {}

import { SacTooltipComponent } from '../tooltip/tooltip';
import { SacTinyMceComponent } from './tinymce';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [SacTinyMceComponent, SacTooltipComponent],
    exports: [SacTinyMceComponent],
})
export class SACBootstrap3TinyMceModule {}

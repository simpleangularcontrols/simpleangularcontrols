import { SacTooltipComponent } from '../tooltip/tooltip';
import { SacStaticFormContainerComponent } from './formcontainer';
import { SacStaticLabelComponent } from './staticlabel';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [CommonModule, SacStaticLabelComponent, SacStaticFormContainerComponent, SacTooltipComponent],
    exports: [SacStaticLabelComponent, SacStaticFormContainerComponent],
})
export class SACBootstrap3StaticLabelModule {}

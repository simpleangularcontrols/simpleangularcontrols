import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SacStaticLabelComponent } from './staticlabel';
import { SacStaticFormContainerComponent } from './formcontainer';
import { SACBootstrap3TooltipModule } from '../tooltip/tooltip.module';

@NgModule({
    imports: [
        CommonModule, SACBootstrap3TooltipModule,
        SacStaticLabelComponent, SacStaticFormContainerComponent
    ],
    exports: [SacStaticLabelComponent, SacStaticFormContainerComponent]
})
export class SACBootstrap3StaticLabelModule { }

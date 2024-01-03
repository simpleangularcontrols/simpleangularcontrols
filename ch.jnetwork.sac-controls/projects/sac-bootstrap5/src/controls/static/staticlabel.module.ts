import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SacStaticLabelComponent } from './staticlabel';
import { SacStaticFormContainerComponent } from './formcontainer';

@NgModule({
    imports: [
        CommonModule,
        SacStaticLabelComponent, SacStaticFormContainerComponent
    ],
    exports: [SacStaticLabelComponent, SacStaticFormContainerComponent]
})
export class SACBootstrap5StaticLabelModule { }

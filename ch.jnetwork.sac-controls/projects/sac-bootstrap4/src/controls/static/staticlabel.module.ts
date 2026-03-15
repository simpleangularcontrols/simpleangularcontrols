import { SacStaticFormContainerComponent } from './formcontainer';
import { SacStaticLabelComponent } from './staticlabel';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [CommonModule, SacStaticLabelComponent, SacStaticFormContainerComponent],
    exports: [SacStaticLabelComponent, SacStaticFormContainerComponent],
})
export class SACBootstrap4StaticLabelModule {}

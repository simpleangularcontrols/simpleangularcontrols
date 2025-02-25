import { SACBootstrap3LayoutModule } from '../layout/layout.module';
import { SACBootstrap3TooltipModule } from '../tooltip/tooltip.module';
import { SacDropzoneMultipleComponent } from './dropzonemultiple';
import { SacDropzoneSingleComponent } from './dropzonesingle';
import { SacUploadComponent } from './upload';
import { SacUploadMultipleComponent } from './uploadmultiple';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        SacUploadComponent,
        SacUploadMultipleComponent,
        SacDropzoneSingleComponent,
        SacDropzoneMultipleComponent,
    ],
    imports: [CommonModule, FormsModule, SACBootstrap3LayoutModule, SACBootstrap3TooltipModule],
    exports: [SacUploadComponent, SacUploadMultipleComponent, SacDropzoneSingleComponent, SacDropzoneMultipleComponent],
})
export class SACBootstrap3UploadModule {}

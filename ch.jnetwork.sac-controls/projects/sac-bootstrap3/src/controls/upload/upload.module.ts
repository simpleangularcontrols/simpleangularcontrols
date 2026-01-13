import { SACBootstrap3LayoutModule } from '../layout/layout.module';
import { SACBootstrap3TooltipModule } from '../tooltip/tooltip.module';
import { SacDropzoneMultipleComponent } from './dropzonemultiple';
import { SacDropzoneSingleComponent } from './dropzonesingle';
import { SacUploadComponent } from './upload';
import { SacUploadMultipleComponent } from './uploadmultiple';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SACCommonUtliltiesModule } from '@simpleangularcontrols/sac-common';

@NgModule({
    declarations: [
        SacUploadComponent,
        SacUploadMultipleComponent,
        SacDropzoneSingleComponent,
        SacDropzoneMultipleComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        SACBootstrap3LayoutModule,
        SACBootstrap3TooltipModule,
        SACCommonUtliltiesModule,
    ],
    exports: [SacUploadComponent, SacUploadMultipleComponent, SacDropzoneSingleComponent, SacDropzoneMultipleComponent],
})
export class SACBootstrap3UploadModule {}

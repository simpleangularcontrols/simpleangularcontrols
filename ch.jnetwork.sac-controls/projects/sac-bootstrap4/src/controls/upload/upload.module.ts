import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SacDropzoneMultipleComponent } from './dropzonemultiple';
import { SacDropzoneSingleComponent } from './dropzonesingle';
import { SacUploadComponent } from './upload';
import { SacUploadMultipleComponent } from './uploadmultiple';

@NgModule({
    imports: [CommonModule, FormsModule, SacUploadComponent,
        SacUploadMultipleComponent,
        SacDropzoneSingleComponent,
        SacDropzoneMultipleComponent],
    exports: [
        SacUploadComponent,
        SacUploadMultipleComponent,
        SacDropzoneSingleComponent,
        SacDropzoneMultipleComponent,
    ],
})
export class SACBootstrap4UploadModule {}

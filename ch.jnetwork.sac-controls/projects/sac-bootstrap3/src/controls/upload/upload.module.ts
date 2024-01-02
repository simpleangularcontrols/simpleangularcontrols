import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SacUploadComponent } from './upload';
import { SacUploadMultipleComponent } from './uploadmultiple';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule, FormsModule,
        SacUploadComponent, SacUploadMultipleComponent
    ],
    exports: [SacUploadComponent, SacUploadMultipleComponent]
})
export class SACBootstrap3UploadModule { }

import { UploaderRoutingModule } from './uploader-routing.module';
import { DemoUploaderComponent } from './uploader.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    SACBootstrap5ButtonModule,
    SACBootstrap5FormModule,
    SACBootstrap5UploadModule,
    SACBootstrap5ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap5';

@NgModule({
    declarations: [DemoUploaderComponent],
    imports: [
        CommonModule,
        FormsModule,
        UploaderRoutingModule,
        SACBootstrap5FormModule,
        SACBootstrap5ButtonModule,
        SACBootstrap5ValidationSummaryModule,
        SACBootstrap5UploadModule,
    ],
})
export class UploaderModule {}

import { ReactiveFormRoutingModule } from './reactiveform-routing.module';
import { DemoRectiveFormComponent } from './reactiveform.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
    SACBootstrap4ButtonModule,
    SACBootstrap4CheckboxModule,
    SACBootstrap4DateTimeModule,
    SACBootstrap4InputModule,
    SACBootstrap4ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap4';

@NgModule({
    declarations: [DemoRectiveFormComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ReactiveFormRoutingModule,
        SACBootstrap4InputModule,
        SACBootstrap4CheckboxModule,
        SACBootstrap4ValidationSummaryModule,
        SACBootstrap4ButtonModule,
        SACBootstrap4DateTimeModule,
    ],
})
export class ReactiveFormModule {}

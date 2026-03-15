import { ReactiveFormRoutingModule } from './reactiveform-routing.module';
import { DemoRectiveFormComponent } from './reactiveform.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
    SACBootstrap3ButtonModule,
    SACBootstrap3CheckboxModule,
    SACBootstrap3DateTimeModule,
    SACBootstrap3InputModule,
    SACBootstrap3ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap3';

@NgModule({
    declarations: [DemoRectiveFormComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ReactiveFormRoutingModule,
        SACBootstrap3InputModule,
        SACBootstrap3CheckboxModule,
        SACBootstrap3ValidationSummaryModule,
        SACBootstrap3ButtonModule,
        SACBootstrap3DateTimeModule,
    ],
})
export class ReactiveFormModule {}

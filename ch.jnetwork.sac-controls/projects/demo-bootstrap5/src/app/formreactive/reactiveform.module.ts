import { ReactiveFormRoutingModule } from './reactiveform-routing.module';
import { DemoRectiveFormComponent } from './reactiveform.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
    SACBootstrap5ButtonModule,
    SACBootstrap5CheckboxModule,
    SACBootstrap5DateTimeModule,
    SACBootstrap5InputModule,
    SACBootstrap5ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap5';

@NgModule({
    declarations: [DemoRectiveFormComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ReactiveFormRoutingModule,
        SACBootstrap5InputModule,
        SACBootstrap5CheckboxModule,
        SACBootstrap5ValidationSummaryModule,
        SACBootstrap5ButtonModule,
        SACBootstrap5DateTimeModule,
    ],
})
export class ReactiveFormModule {}

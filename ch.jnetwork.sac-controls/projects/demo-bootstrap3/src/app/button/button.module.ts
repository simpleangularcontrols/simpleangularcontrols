import { ButtonRoutingModule } from './button-routing.module';
import { DemoButtonComponent } from './button.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    SACBootstrap3ButtonModule,
    SACBootstrap3FormModule,
    SACBootstrap3ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap3';

@NgModule({
    declarations: [DemoButtonComponent],
    imports: [
        CommonModule,
        FormsModule,
        ButtonRoutingModule,
        SACBootstrap3FormModule,
        SACBootstrap3ButtonModule,
        SACBootstrap3ValidationSummaryModule,
    ],
})
export class ButtonModule {}

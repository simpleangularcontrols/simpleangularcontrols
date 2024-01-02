import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap5FormModule,
  SACBootstrap5MultilanguageModule,
  SACBootstrap5ButtonModule,
  SACBootstrap5ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap5';
import { MultilanguageRoutingModule } from './multilanguage-routing.module';
import { DemoMultilanguageComponent } from './multilanguage.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MultilanguageRoutingModule,
        SACBootstrap5FormModule,
        SACBootstrap5ButtonModule,
        SACBootstrap5ValidationSummaryModule,
        SACBootstrap5MultilanguageModule,
        DemoMultilanguageComponent,
    ],
})
export class MultilanguageModule {}

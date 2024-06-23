import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap3FormModule,
  // SACBootstrap3MultilanguageModule,
  SACBootstrap3ButtonModule,
  SACBootstrap3ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap3';
import { MultilanguageRoutingModule } from './multilanguage-routing.module';
import { DemoMultilanguageComponent } from './multilanguage.component';
@NgModule({
  declarations: [DemoMultilanguageComponent],
  imports: [
    CommonModule,
    FormsModule,
    MultilanguageRoutingModule,
    SACBootstrap3FormModule,
    SACBootstrap3ButtonModule,
    SACBootstrap3ValidationSummaryModule,
    // SACBootstrap3MultilanguageModule,
  ],
})
export class MultilanguageModule {}

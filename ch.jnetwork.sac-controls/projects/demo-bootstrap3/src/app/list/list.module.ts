import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap3FormModule,
  SACBootstrap3ListModule,
  // SACBootstrap3DropdownModule,
  SACBootstrap3ButtonModule,
  SACBootstrap3ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap3';
import { ListRoutingModule } from './list-routing.module';
import { DemoListComponent } from './list.component';
@NgModule({
  declarations: [DemoListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ListRoutingModule,
    SACBootstrap3FormModule,
    SACBootstrap3ButtonModule,
    SACBootstrap3ValidationSummaryModule,
    SACBootstrap3ListModule,
    // SACBootstrap3DropdownModule,
  ],
})
export class ListModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap4FormModule,
  SACBootstrap4ListModule,
  SACBootstrap4DropdownModule,
  SACBootstrap4ButtonModule,
  SACBootstrap4ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap4';
import { ListRoutingModule } from './list-routing.module';
import { DemoListComponent } from './list.component';
@NgModule({
  declarations: [DemoListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ListRoutingModule,
    SACBootstrap4FormModule,
    SACBootstrap4ButtonModule,
    SACBootstrap4ValidationSummaryModule,
    SACBootstrap4ListModule,
    SACBootstrap4DropdownModule,
  ],
})
export class ListModule {}

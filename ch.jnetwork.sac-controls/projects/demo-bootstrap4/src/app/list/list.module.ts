import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  JNetworkBootstrap4FormModule,
  JNetworkBootstrap4ListModule,
  JNetworkBootstrap4ButtonModule,
  JNetworkBootstrap4ValidationSummaryModule,
} from '@jnetwork/jngcontrols-bootstrap4';
import { ListRoutingModule } from './list-routing.module';
import { DemoListComponent } from './list.component';
@NgModule({
  declarations: [DemoListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ListRoutingModule,
    JNetworkBootstrap4FormModule,
    JNetworkBootstrap4ButtonModule,
    JNetworkBootstrap4ValidationSummaryModule,
    JNetworkBootstrap4ListModule,
  ],
})
export class ListModule {}

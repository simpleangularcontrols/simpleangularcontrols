import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  JNetworkBootstrap4FormModule,
  JNetworkBootstrap4MultilanguageModule,
  JNetworkBootstrap4ButtonModule,
  JNetworkBootstrap4ValidationSummaryModule,
} from '@jnetwork/jngcontrols-bootstrap4';
import { MultilanguageRoutingModule } from './multilanguage-routing.module';
import { DemoMultilanguageComponent } from './multilanguage.component';
@NgModule({
  declarations: [DemoMultilanguageComponent],
  imports: [
    CommonModule,
    FormsModule,
    MultilanguageRoutingModule,
    JNetworkBootstrap4FormModule,
    JNetworkBootstrap4ButtonModule,
    JNetworkBootstrap4ValidationSummaryModule,
    JNetworkBootstrap4MultilanguageModule,
  ],
})
export class MultilanguageModule {}

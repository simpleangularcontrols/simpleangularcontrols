import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap4FormModule,
  SACBootstrap4MultilanguageModule,
  SACBootstrap4ButtonModule,
  SACBootstrap4ValidationSummaryModule,
} from '@jnetwork/sac-bootstrap4';
import { MultilanguageRoutingModule } from './multilanguage-routing.module';
import { DemoMultilanguageComponent } from './multilanguage.component';
@NgModule({
  declarations: [DemoMultilanguageComponent],
  imports: [
    CommonModule,
    FormsModule,
    MultilanguageRoutingModule,
    SACBootstrap4FormModule,
    SACBootstrap4ButtonModule,
    SACBootstrap4ValidationSummaryModule,
    SACBootstrap4MultilanguageModule,
  ],
})
export class MultilanguageModule {}

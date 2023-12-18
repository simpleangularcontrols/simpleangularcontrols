import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap4TabsModule,
  SACBootstrap4FormModule,
  SACBootstrap4ValidationSummaryModule,
} from '@jnetwork/sac-bootstrap4';
import { TabsRoutingModule } from './tabs-routing.module';
import { DemoTabsComponent } from './tabs.component';
@NgModule({
  declarations: [DemoTabsComponent],
  imports: [
    CommonModule,
    FormsModule,
    TabsRoutingModule,
    SACBootstrap4FormModule,
    SACBootstrap4TabsModule,
    SACBootstrap4ValidationSummaryModule,
    SACBootstrap4TabsModule,
  ],
})
export class TabsModule {}

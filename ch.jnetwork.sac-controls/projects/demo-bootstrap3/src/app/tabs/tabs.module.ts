import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap3TabsModule,
  SACBootstrap3FormModule,
  SACBootstrap3ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap3';
import { TabsRoutingModule } from './tabs-routing.module';
import { DemoTabsComponent } from './tabs.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TabsRoutingModule,
        SACBootstrap3FormModule,
        SACBootstrap3TabsModule,
        SACBootstrap3ValidationSummaryModule,
        SACBootstrap3TabsModule,
        DemoTabsComponent,
    ],
})
export class TabsModule {}

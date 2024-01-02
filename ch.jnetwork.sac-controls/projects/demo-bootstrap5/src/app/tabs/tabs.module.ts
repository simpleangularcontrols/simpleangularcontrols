import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap5TabsModule,
  SACBootstrap5FormModule,
  SACBootstrap5ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap5';
import { TabsRoutingModule } from './tabs-routing.module';
import { DemoTabsComponent } from './tabs.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TabsRoutingModule,
        SACBootstrap5FormModule,
        SACBootstrap5TabsModule,
        SACBootstrap5ValidationSummaryModule,
        SACBootstrap5TabsModule,
        DemoTabsComponent,
    ],
})
export class TabsModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  JNetworkBootstrap4TabsModule,
  JNetworkBootstrap4FormModule,
  JNetworkBootstrap4ValidationSummaryModule,
} from '@jnetwork/jngcontrols-bootstrap4';
import { TabsRoutingModule } from './tabs-routing.module';
import { DemoTabsComponent } from './tabs.component';
@NgModule({
  declarations: [DemoTabsComponent],
  imports: [
    CommonModule,
    FormsModule,
    TabsRoutingModule,
    JNetworkBootstrap4FormModule,
    JNetworkBootstrap4TabsModule,
    JNetworkBootstrap4ValidationSummaryModule,
    JNetworkBootstrap4TabsModule,
  ],
})
export class TabsModule {}

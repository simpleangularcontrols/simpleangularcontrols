import { NgModule } from '@angular/core';
import { TabsRoutingModule } from './tabs-routing.module';
import { DemoTabsComponent } from './tabs.component';
@NgModule({
  imports: [TabsRoutingModule, DemoTabsComponent],
})
export class TabsModule {}

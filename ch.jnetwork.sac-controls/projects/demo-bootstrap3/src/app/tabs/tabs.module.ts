import { TabsRoutingModule } from './tabs-routing.module';
import { DemoTabsComponent } from './tabs.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [TabsRoutingModule, DemoTabsComponent],
})
export class TabsModule {}

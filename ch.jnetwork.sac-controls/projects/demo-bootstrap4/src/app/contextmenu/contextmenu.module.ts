import { ContextmenuRoutingModule } from './contextmenu-routing.module';
import { DemoContextmenuComponent } from './contextmenu.component';
import { InjectDemoComponent } from './injectdemo.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [ContextmenuRoutingModule, DemoContextmenuComponent, InjectDemoComponent],
})
export class ContextmenuModule {}

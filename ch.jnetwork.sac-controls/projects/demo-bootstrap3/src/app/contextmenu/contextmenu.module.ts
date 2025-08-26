import { ContextmenuRoutingModule } from './contextmenu-routing.module';
import { DemoContextmenuComponent } from './contextmenu.component';
import { InjectDemoComponent } from './injectdemo.component';
import { RepeatComponent } from './repeat.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SACBootstrap3ContextmenuModule, SACBootstrap3FormModule } from '@simpleangularcontrols/sac-bootstrap3';

@NgModule({
    declarations: [DemoContextmenuComponent, InjectDemoComponent, RepeatComponent],
    imports: [
        CommonModule,
        FormsModule,
        ContextmenuRoutingModule,
        SACBootstrap3FormModule,
        SACBootstrap3ContextmenuModule,
    ],
})
export class ContextmenuModule {}

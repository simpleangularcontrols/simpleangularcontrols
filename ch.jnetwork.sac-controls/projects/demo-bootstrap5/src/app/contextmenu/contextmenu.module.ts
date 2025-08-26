import { ContextmenuRoutingModule } from './contextmenu-routing.module';
import { DemoContextmenuComponent } from './contextmenu.component';
import { InjectDemoComponent } from './injectdemo.component';
import { RepeatComponent } from './repeat.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SACBootstrap5ContextmenuModule, SACBootstrap5FormModule } from '@simpleangularcontrols/sac-bootstrap5';

@NgModule({
    declarations: [DemoContextmenuComponent, InjectDemoComponent, RepeatComponent],
    imports: [
        CommonModule,
        FormsModule,
        ContextmenuRoutingModule,
        SACBootstrap5FormModule,
        SACBootstrap5ContextmenuModule,
    ],
})
export class ContextmenuModule {}

import { ContextmenuRoutingModule } from './contextmenu-routing.module';
import { DemoContextmenuComponent } from './contextmenu.component';
import { InjectDemoComponent } from './injectdemo.component';
import { RepeatComponent } from './repeat.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SACBootstrap4ContextmenuModule, SACBootstrap4FormModule } from '@simpleangularcontrols/sac-bootstrap4';

@NgModule({
    declarations: [DemoContextmenuComponent, InjectDemoComponent, RepeatComponent],
    imports: [
        CommonModule,
        FormsModule,
        ContextmenuRoutingModule,
        SACBootstrap4FormModule,
        SACBootstrap4ContextmenuModule,
    ],
})
export class ContextmenuModule {}

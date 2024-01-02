import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap5FormModule,
  SACBootstrap5ContextmenuModule,
} from '@simpleangularcontrols/sac-bootstrap5';
import { ContextmenuRoutingModule } from './contextmenu-routing.module';
import { DemoContextmenuComponent } from './contextmenu.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ContextmenuRoutingModule,
        SACBootstrap5FormModule,
        SACBootstrap5ContextmenuModule,
        DemoContextmenuComponent,
    ],
})
export class ContextmenuModule {}

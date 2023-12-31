import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap3FormModule,
  // SACBootstrap3ContextmenuModule,
} from '@simpleangularcontrols/sac-bootstrap3';
import { ContextmenuRoutingModule } from './contextmenu-routing.module';
import { DemoContextmenuComponent } from './contextmenu.component';
@NgModule({
  declarations: [DemoContextmenuComponent],
  imports: [
    CommonModule,
    FormsModule,
    ContextmenuRoutingModule,
    SACBootstrap3FormModule,
    // SACBootstrap3ContextmenuModule,
  ],
})
export class ContextmenuModule {}

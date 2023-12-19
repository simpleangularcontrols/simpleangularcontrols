import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap4FormModule,
  SACBootstrap4ContextmenuModule,
} from '@simpleangularcontrols/sac-bootstrap4';
import { ContextmenuRoutingModule } from './contextmenu-routing.module';
import { DemoContextmenuComponent } from './contextmenu.component';
@NgModule({
  declarations: [DemoContextmenuComponent],
  imports: [
    CommonModule,
    FormsModule,
    ContextmenuRoutingModule,
    SACBootstrap4FormModule,
    SACBootstrap4ContextmenuModule,
  ],
})
export class ContextmenuModule {}

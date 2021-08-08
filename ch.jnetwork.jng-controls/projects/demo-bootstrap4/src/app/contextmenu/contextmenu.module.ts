import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  JNetworkBootstrap4FormModule,
  JNetworkBootstrap4ContextmenuModule,
} from '@jnetwork/jngcontrols-bootstrap4';
import { ContextmenuRoutingModule } from './contextmenu-routing.module';
import { DemoContextmenuComponent } from './contextmenu.component';
@NgModule({
  declarations: [DemoContextmenuComponent],
  imports: [
    CommonModule,
    FormsModule,
    ContextmenuRoutingModule,
    JNetworkBootstrap4FormModule,
    JNetworkBootstrap4ContextmenuModule,
  ],
})
export class ContextmenuModule {}

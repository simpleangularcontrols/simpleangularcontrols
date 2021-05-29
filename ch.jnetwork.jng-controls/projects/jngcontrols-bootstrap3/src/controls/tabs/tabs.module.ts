import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgTabComponent } from './tab';
import { NgTabItemComponent } from './tabitem';

@NgModule({
  declarations: [NgTabComponent, NgTabItemComponent],
  imports: [
    CommonModule
  ],
  exports: [NgTabComponent, NgTabItemComponent]
})
export class JNetworkBootstrap3TabsModule { }

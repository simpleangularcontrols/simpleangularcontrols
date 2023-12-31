import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SacTabComponent } from './tab';
import { SacTabItemComponent } from './tabitem';

@NgModule({
  declarations: [SacTabComponent, SacTabItemComponent],
  imports: [
    CommonModule
  ],
  exports: [SacTabComponent, SacTabItemComponent]
})
export class SACBootstrap5TabsModule { }

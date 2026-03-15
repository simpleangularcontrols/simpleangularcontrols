import { SacTabComponent } from './tab';
import { SacTabItemComponent } from './tabitem';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [CommonModule, SacTabComponent, SacTabItemComponent],
    exports: [SacTabComponent, SacTabItemComponent],
})
export class SACBootstrap3TabsModule {}

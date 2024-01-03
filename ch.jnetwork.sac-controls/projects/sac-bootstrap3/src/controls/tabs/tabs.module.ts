import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SacTabComponent } from './tab';
import { SacTabItemComponent } from './tabitem';

@NgModule({
    imports: [
        CommonModule,
        SacTabComponent, SacTabItemComponent
    ],
    exports: [SacTabComponent, SacTabItemComponent]
})
export class SACBootstrap3TabsModule { }

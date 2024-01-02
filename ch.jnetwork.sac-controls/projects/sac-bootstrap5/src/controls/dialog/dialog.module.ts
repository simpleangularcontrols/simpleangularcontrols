import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SacDialogComponent } from './dialog';

@NgModule({
    imports: [
        CommonModule,
        SacDialogComponent
    ],
    exports: [SacDialogComponent]
})
export class SACBootstrap5DialogModule { }

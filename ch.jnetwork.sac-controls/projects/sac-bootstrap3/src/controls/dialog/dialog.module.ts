import { SacDialogComponent } from './dialog';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [CommonModule, SacDialogComponent],
    exports: [SacDialogComponent],
})
export class SACBootstrap3DialogModule {}

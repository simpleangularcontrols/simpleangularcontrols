import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgDialogComponent } from './dialog';

@NgModule({
  declarations: [NgDialogComponent],
  imports: [
    CommonModule
  ],
  exports: [NgDialogComponent]
})
export class SACBootstrap3DialogModule { }

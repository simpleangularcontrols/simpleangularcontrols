import { NgModule } from '@angular/core';
import { SacButtonComponent } from './button';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SacButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [SacButtonComponent]
})
export class SACBootstrap4ButtonModule { }

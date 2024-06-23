import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SacFormDirective } from './form';
import { SacInheritFormDirective } from './inheritform.directive';

@NgModule({
  declarations: [SacFormDirective, SacInheritFormDirective],
  imports: [CommonModule, FormsModule],
  exports: [SacFormDirective, SacInheritFormDirective],
})
export class SACBootstrap5FormModule {}

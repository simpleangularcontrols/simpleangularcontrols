import { SacFormDirective } from './form';
import { SacInheritFormDirective } from './inheritform.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SACCommonUtliltiesModule } from '@simpleangularcontrols/sac-common';

@NgModule({
  declarations: [SacFormDirective, SacInheritFormDirective],
  imports: [CommonModule, FormsModule, SACCommonUtliltiesModule],
  exports: [SacFormDirective, SacInheritFormDirective],
})
export class SACBootstrap4FormModule {}

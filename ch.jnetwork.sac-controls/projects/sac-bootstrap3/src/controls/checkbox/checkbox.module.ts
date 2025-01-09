import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SacTooltipComponent } from '../tooltip/tooltip';
import { SacCheckboxComponent } from './checkbox';
import { SacRadiobuttonComponent } from './radiobutton';
import { SacRadiobuttonsComponent } from './radiobuttons';

@NgModule({
  imports: [
    CommonModule,
    SacCheckboxComponent,
    SacRadiobuttonComponent,
    SacRadiobuttonsComponent,
    SacTooltipComponent,
  ],
  exports: [
    SacCheckboxComponent,
    SacRadiobuttonComponent,
    SacRadiobuttonsComponent,
  ],
})
export class SACBootstrap3CheckboxModule {}

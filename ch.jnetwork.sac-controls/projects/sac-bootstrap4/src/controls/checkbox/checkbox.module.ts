import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SACBootstrap4LayoutModule } from '../layout/layout.module';
import { SACBootstrap4TooltipModule } from '../tooltip/tooltip.module';
import { SacCheckboxComponent } from './checkbox';
import { SacRadiobuttonComponent } from './radiobutton';
import { SacRadiobuttonsComponent } from './radiobuttons';

@NgModule({
  declarations: [
    SacCheckboxComponent,
    SacRadiobuttonComponent,
    SacRadiobuttonsComponent,
  ],
  imports: [
    CommonModule,
    SACBootstrap4LayoutModule,
    SACBootstrap4TooltipModule,
  ],
  exports: [
    SacCheckboxComponent,
    SacRadiobuttonComponent,
    SacRadiobuttonsComponent,
  ],
})
export class SACBootstrap4CheckboxModule {}

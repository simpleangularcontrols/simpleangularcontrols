import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SacCheckboxComponent } from './checkbox';
import { SacRadiobuttonComponent } from './radiobutton';
import { SacRadiobuttonsComponent } from './radiobuttons';

@NgModule({
  declarations: [
    SacCheckboxComponent,
    SacRadiobuttonComponent,
    SacRadiobuttonsComponent,
  ],
  imports: [CommonModule, SACBootstrap5LayoutModule],
  exports: [
    SacCheckboxComponent,
    SacRadiobuttonComponent,
    SacRadiobuttonsComponent,
  ],
})
export class SACBootstrap5CheckboxModule {}

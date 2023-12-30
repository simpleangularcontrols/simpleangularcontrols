import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SacCheckboxComponent } from './checkbox';
import { SacRadiobuttonComponent } from './radiobutton';
import { SacRadiobuttonsComponent } from './radiobuttons';

@NgModule({
  declarations: [SacCheckboxComponent, SacRadiobuttonComponent, SacRadiobuttonsComponent],
  imports: [
    CommonModule
  ],
  exports: [SacCheckboxComponent, SacRadiobuttonComponent, SacRadiobuttonsComponent]
})
export class SACBootstrap5CheckboxModule { }

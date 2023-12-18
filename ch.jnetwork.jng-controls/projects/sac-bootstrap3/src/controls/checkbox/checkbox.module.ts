import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgCheckboxComponent } from './checkbox';
import { NgRadiobuttonComponent } from './radiobutton';
import { NgRadiobuttonsComponent } from './radiobuttons';

@NgModule({
  declarations: [NgCheckboxComponent, NgRadiobuttonComponent, NgRadiobuttonsComponent],
  imports: [
    CommonModule
  ],
  exports: [NgCheckboxComponent, NgRadiobuttonComponent, NgRadiobuttonsComponent]
})
export class SACBootstrap3CheckboxModule { }

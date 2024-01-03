import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SacCheckboxComponent } from './checkbox';
import { SacRadiobuttonComponent } from './radiobutton';
import { SacRadiobuttonsComponent } from './radiobuttons';

@NgModule({
    imports: [
        CommonModule,
        SacCheckboxComponent, SacRadiobuttonComponent, SacRadiobuttonsComponent
    ],
    exports: [SacCheckboxComponent, SacRadiobuttonComponent, SacRadiobuttonsComponent]
})
export class SACBootstrap3CheckboxModule { }

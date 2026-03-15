import { SacCheckboxComponent } from './checkbox';
import { SacRadiobuttonComponent } from './radiobutton';
import { SacRadiobuttonsComponent } from './radiobuttons';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [CommonModule, SacCheckboxComponent, SacRadiobuttonComponent, SacRadiobuttonsComponent],
    exports: [SacCheckboxComponent, SacRadiobuttonComponent, SacRadiobuttonsComponent],
})
export class SACBootstrap5CheckboxModule {}

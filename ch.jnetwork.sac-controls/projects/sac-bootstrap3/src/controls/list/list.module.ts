import { SacTooltipComponent } from '../tooltip/tooltip';
import { SacDropdownComponent, SacDropdownOptionDirective } from './dropdown';
import { SacListboxComponent, SacListboxOptionDirective } from './listbox';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SacDropdownComponent,
        SacDropdownOptionDirective,
        SacListboxOptionDirective,
        SacListboxComponent,
        SacTooltipComponent,
    ],
    exports: [SacDropdownComponent, SacDropdownOptionDirective, SacListboxComponent, SacListboxOptionDirective],
})
export class SACBootstrap3ListModule {}

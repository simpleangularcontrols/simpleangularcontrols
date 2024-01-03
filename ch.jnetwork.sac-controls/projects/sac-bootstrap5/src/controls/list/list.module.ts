import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SacListboxComponent, SacListboxOptionDirective } from './listbox';

@NgModule({
    imports: [CommonModule, SacListboxComponent, SacListboxOptionDirective],
    exports: [SacListboxComponent, SacListboxOptionDirective],
})
export class SACBootstrap5ListModule {}

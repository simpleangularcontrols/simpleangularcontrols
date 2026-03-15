import { SacListboxComponent, SacListboxOptionDirective } from './listbox';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [CommonModule, SacListboxComponent, SacListboxOptionDirective],
    exports: [SacListboxComponent, SacListboxOptionDirective],
})
export class SACBootstrap4ListModule {}

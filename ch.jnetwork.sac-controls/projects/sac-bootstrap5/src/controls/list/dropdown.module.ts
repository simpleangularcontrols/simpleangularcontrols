import { SacDropdownComponent, SacDropdownOptionDirective } from './dropdown';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [CommonModule, SacDropdownComponent, SacDropdownOptionDirective],
    exports: [SacDropdownComponent, SacDropdownOptionDirective],
})
export class SACBootstrap5DropdownModule {}

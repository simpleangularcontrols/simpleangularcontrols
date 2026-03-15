import { SacFormDirective } from './form';
import { SacInheritFormDirective } from './inheritform.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, FormsModule, SacFormDirective, SacInheritFormDirective],
    exports: [SacFormDirective, SacInheritFormDirective],
})
export class SACBootstrap5FormModule {}

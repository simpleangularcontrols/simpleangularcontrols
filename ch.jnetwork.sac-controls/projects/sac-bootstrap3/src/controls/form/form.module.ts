import { SacFormDirective } from './form';
import { SacInheritFormDirective } from './inheritform.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [SacFormDirective, SacInheritFormDirective],
    imports: [CommonModule, FormsModule],
    exports: [SacFormDirective, SacInheritFormDirective],
})
export class SACBootstrap3FormModule {}

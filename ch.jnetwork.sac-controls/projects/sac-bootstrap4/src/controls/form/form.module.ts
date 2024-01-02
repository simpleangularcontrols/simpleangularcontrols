import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SacFormDirective } from './form';
import { SacInheritFormDirective } from './inheritform.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SacFormDirective, SacInheritFormDirective
    ],
    exports: [
        SacFormDirective, SacInheritFormDirective
    ]
})
export class SACBootstrap4FormModule { }

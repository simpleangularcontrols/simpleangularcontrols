import { NgModule } from '@angular/core';
import { SacButtonComponent } from './button';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        SacButtonComponent
    ],
    exports: [SacButtonComponent]
})
export class SACBootstrap5ButtonModule { }

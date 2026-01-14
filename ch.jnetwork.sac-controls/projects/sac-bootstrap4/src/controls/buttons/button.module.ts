import { SacButtonComponent } from './button';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [CommonModule, SacButtonComponent],
    exports: [SacButtonComponent],
})
export class SACBootstrap4ButtonModule {}

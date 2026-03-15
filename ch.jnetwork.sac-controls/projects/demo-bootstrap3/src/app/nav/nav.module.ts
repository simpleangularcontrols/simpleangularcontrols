import { AppNavigationComponent } from './nav.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [AppNavigationComponent],
    imports: [CommonModule, RouterModule],
    exports: [AppNavigationComponent],
})
export class AppNavigationModule {}

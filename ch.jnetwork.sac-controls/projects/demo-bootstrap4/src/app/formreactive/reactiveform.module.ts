import { ReactiveFormRoutingModule } from './reactiveform-routing.module';
import { DemoRectiveFormComponent } from './reactiveform.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [ReactiveFormRoutingModule, DemoRectiveFormComponent],
})
export class ReactiveFormModule {}

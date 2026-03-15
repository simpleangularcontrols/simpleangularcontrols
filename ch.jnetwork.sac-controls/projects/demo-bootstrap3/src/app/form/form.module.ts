import { FormRoutingModule } from './form-routing.module';
import { DemoFormComponent } from './form.component';
import { DemoSubFormComponent } from './subform.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [FormRoutingModule, DemoFormComponent, DemoSubFormComponent],
})
export class FormModule {}

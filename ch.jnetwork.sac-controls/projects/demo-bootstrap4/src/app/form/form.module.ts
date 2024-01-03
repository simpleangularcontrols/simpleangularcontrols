import { NgModule } from '@angular/core';
import { FormRoutingModule } from './form-routing.module';
import { DemoFormComponent } from './form.component';
import { DemoSubFormComponent } from './subform.component';
@NgModule({
  imports: [FormRoutingModule, DemoFormComponent, DemoSubFormComponent],
})
export class FormModule {}

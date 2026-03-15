import { CheckboxRoutingModule } from './checkbox-routing.module';
import { DemoCheckboxComponent } from './checkbox.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [CheckboxRoutingModule, DemoCheckboxComponent],
})
export class CheckboxModule {}

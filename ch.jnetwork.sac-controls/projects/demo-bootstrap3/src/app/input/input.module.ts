import { InputRoutingModule } from './input-routing.module';
import { DemoInputComponent } from './input.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [InputRoutingModule, DemoInputComponent],
})
export class InputModule {}

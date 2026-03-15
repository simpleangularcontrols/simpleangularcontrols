import { ButtonRoutingModule } from './button-routing.module';
import { DemoButtonComponent } from './button.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [ButtonRoutingModule, DemoButtonComponent],
})
export class ButtonModule {}

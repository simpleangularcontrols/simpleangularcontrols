import { NgModule } from '@angular/core';
import { ButtonRoutingModule } from './button-routing.module';
import { DemoButtonComponent } from './button.component';
@NgModule({
  imports: [ButtonRoutingModule, DemoButtonComponent],
})
export class ButtonModule {}

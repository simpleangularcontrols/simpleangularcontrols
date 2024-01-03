import { NgModule } from '@angular/core';
import { ConfirmRoutingModule } from './confirm-routing.module';
import { DemoConfirmComponent } from './confirm.component';
@NgModule({
  imports: [ConfirmRoutingModule, DemoConfirmComponent],
})
export class ConfirmModule {}

import { ConfirmRoutingModule } from './confirm-routing.module';
import { DemoConfirmComponent } from './confirm.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [ConfirmRoutingModule, DemoConfirmComponent],
})
export class ConfirmModule {}

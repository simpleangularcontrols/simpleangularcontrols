import { NgModule } from '@angular/core';
import { DatetimeRoutingModule } from './datetime-routing.module';
import { DemoDatetimeComponent } from './datetime.component';
@NgModule({
  imports: [DatetimeRoutingModule, DemoDatetimeComponent],
})
export class DatetimeModule {}

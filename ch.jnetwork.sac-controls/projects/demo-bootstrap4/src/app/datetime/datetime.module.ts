import { DatetimeRoutingModule } from './datetime-routing.module';
import { DemoDatetimeComponent } from './datetime.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [DatetimeRoutingModule, DemoDatetimeComponent],
})
export class DatetimeModule {}

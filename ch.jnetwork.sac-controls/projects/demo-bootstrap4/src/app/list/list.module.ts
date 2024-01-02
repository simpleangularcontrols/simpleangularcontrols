import { NgModule } from '@angular/core';
import { ListRoutingModule } from './list-routing.module';
import { DemoListComponent } from './list.component';
@NgModule({
  imports: [ListRoutingModule, DemoListComponent],
})
export class ListModule {}

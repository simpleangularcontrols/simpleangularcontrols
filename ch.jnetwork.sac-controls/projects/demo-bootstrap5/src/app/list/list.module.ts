import { ListRoutingModule } from './list-routing.module';
import { DemoListComponent } from './list.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [ListRoutingModule, DemoListComponent],
})
export class ListModule {}

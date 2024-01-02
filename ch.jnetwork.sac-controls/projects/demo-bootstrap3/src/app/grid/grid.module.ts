import { NgModule } from '@angular/core';
import { GridRoutingModule } from './grid-routing.module';
import { DemoGridComponent } from './grid.component';
import { GridService } from './services/GridService';
@NgModule({
  imports: [GridRoutingModule, DemoGridComponent],
  providers: [GridService],
})
export class GridModule {}

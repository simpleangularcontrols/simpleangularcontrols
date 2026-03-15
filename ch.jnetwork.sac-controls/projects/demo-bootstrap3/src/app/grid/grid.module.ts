import { GridRoutingModule } from './grid-routing.module';
import { DemoGridComponent } from './grid.component';
import { GridService } from './services/GridService';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [GridRoutingModule, DemoGridComponent],
    providers: [GridService],
})
export class GridModule {}

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap4ButtonModule,
  SACBootstrap4FormModule,
  SACBootstrap4GridModule,
  SACBootstrap4ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap4';
import { GridRoutingModule } from './grid-routing.module';
import { DemoGridComponent } from './grid.component';
import { GridService } from './services/GridService';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        GridRoutingModule,
        SACBootstrap4FormModule,
        SACBootstrap4ValidationSummaryModule,
        SACBootstrap4ButtonModule,
        SACBootstrap4GridModule,
        DemoGridComponent,
    ],
    providers: [GridService],
})
export class GridModule {}

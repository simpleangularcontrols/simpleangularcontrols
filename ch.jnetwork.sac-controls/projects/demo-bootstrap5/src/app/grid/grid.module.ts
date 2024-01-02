import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap5ButtonModule,
  SACBootstrap5FormModule,
  SACBootstrap5GridModule,
  SACBootstrap5ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap5';
import { GridRoutingModule } from './grid-routing.module';
import { DemoGridComponent } from './grid.component';
import { GridService } from './services/GridService';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        GridRoutingModule,
        SACBootstrap5FormModule,
        SACBootstrap5ValidationSummaryModule,
        SACBootstrap5ButtonModule,
        SACBootstrap5GridModule,
        DemoGridComponent,
    ],
    providers: [GridService],
})
export class GridModule {}

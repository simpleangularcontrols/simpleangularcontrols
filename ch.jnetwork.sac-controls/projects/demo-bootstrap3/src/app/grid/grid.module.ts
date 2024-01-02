import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap3ButtonModule,
  SACBootstrap3FormModule,
  SACBootstrap3GridModule,
  SACBootstrap3ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap3';
import { GridRoutingModule } from './grid-routing.module';
import { DemoGridComponent } from './grid.component';
import { GridService } from './services/GridService';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        GridRoutingModule,
        SACBootstrap3FormModule,
        SACBootstrap3ValidationSummaryModule,
        SACBootstrap3ButtonModule,
        SACBootstrap3GridModule,
        DemoGridComponent,
    ],
    providers: [GridService],
})
export class GridModule {}

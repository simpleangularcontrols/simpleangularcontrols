import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  JNetworkBootstrap4ButtonModule,
  JNetworkBootstrap4FormModule,
  JNetworkBootstrap4GridModule,
  JNetworkBootstrap4ValidationSummaryModule,
} from '@jnetwork/sac-bootstrap4';
import { GridRoutingModule } from './grid-routing.module';
import { DemoGridComponent } from './grid.component';
import { GridService } from './services/GridService';
@NgModule({
  declarations: [DemoGridComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    GridRoutingModule,
    JNetworkBootstrap4FormModule,
    JNetworkBootstrap4ValidationSummaryModule,
    JNetworkBootstrap4ButtonModule,
    JNetworkBootstrap4GridModule,
  ],
  providers: [GridService],
})
export class GridModule {}

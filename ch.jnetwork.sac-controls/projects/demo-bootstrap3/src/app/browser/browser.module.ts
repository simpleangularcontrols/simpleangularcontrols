import { BrowserRoutingModule } from './browser-routing.module';
import { DemoBrowserComponent } from './browser.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [BrowserRoutingModule, DemoBrowserComponent],
})
export class BrowserModule {}

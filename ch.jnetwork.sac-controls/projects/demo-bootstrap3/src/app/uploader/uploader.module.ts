import { NgModule } from '@angular/core';
import { UploaderRoutingModule } from './uploader-routing.module';
import { DemoUploaderComponent } from './uploader.component';
@NgModule({
  imports: [UploaderRoutingModule, DemoUploaderComponent],
})
export class UploaderModule {}

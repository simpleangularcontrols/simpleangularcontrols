import { UploaderRoutingModule } from './uploader-routing.module';
import { DemoUploaderComponent } from './uploader.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [UploaderRoutingModule, DemoUploaderComponent],
})
export class UploaderModule {}

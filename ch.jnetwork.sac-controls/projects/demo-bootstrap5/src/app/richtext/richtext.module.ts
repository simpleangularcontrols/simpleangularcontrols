import { NgModule } from '@angular/core';
import { TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { RichtextRoutingModule } from './richtext-routing.module';
import { DemoRichtextComponent } from './richtext.component';
@NgModule({
  imports: [RichtextRoutingModule, DemoRichtextComponent],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
  ],
})
export class RichtextModule {}

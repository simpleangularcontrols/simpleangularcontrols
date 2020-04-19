import { Component } from '@angular/core';

@Component({
  selector: 'app-example-upload',
  templateUrl: './upload.component.html'
})
export class ExampleUploadComponent {

  values: any = {
    fieldupload1: null,
    fieldupload2: null,
    fieldupload3: null,
    fieldupload4: null,
    fieldupload5: null,
    fieldupload6: null,
    fieldupload7: null,
    fieldupload8: null,
    fieldmultipleupload1: null,
    fieldmultipleupload2: null,
    fieldmultipleupload3: null,
    fieldmultipleupload4: null
  };

  public showmessage(message: string): void {
    alert(message);
  }

}

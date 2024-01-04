import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SACBootstrap4ButtonModule,
  SACBootstrap4FormModule,
  SACBootstrap4UploadModule,
  SACBootstrap4ValidationSummaryModule,
  SacFormDirective,
} from '@simpleangularcontrols/sac-bootstrap4';

interface KeyValue {
  label: string;
  value: string;
  text: string;
}

interface KeyValueNumeric {
  label: string;
  value: number;
  text: string;
}

interface KeyValue2 extends KeyValue {
  enabled: boolean;
}

interface KeyValue3 extends KeyValue2 {
  checked: boolean;
}

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  standalone: true,
  imports: [
    FormsModule,
    SACBootstrap4FormModule,
    SACBootstrap4ButtonModule,
    SACBootstrap4ValidationSummaryModule,
    SACBootstrap4UploadModule,
  ],
})
export class DemoUploaderComponent {
  public values: any = {
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
    fieldmultipleupload4: null,
    dropzone1: null,
    dropzone2: null,
    dropzone3: null,
    dropzone4: null,
    dropzone5: null,
    dropzone6: null,
    dropzone7: null,
  };

  @ViewChild('myForm') myForm: SacFormDirective;

  public debugAction(): void {
    this.myForm.markAsTouched();
    alert('Action');
  }

  public showmessage(message: string): void {
    alert(message);
  }
}

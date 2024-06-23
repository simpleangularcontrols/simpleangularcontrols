import { Directive, Input } from '@angular/core';
import { UploadState } from 'ngx-uploadx';
import { SacUploadBase } from '../../common/baseuploadcontrol';

/**
 * Upload Komponente für ein einzelnes File
 */
@Directive()
export class SacUploadSingleCommon extends SacUploadBase<string> {
  /**
   * Label für Browse Button
   */
  @Input()
  buttonbrowse: string = 'Browse';

  /**
   * Label für Upload Button
   */
  @Input()
  buttonupload: string = 'Upload';

  /**
   * Macht keine Validierung in diesem Control
   *
   * @param file File das hinzugefügt wurde
   */
  CustomAddValidation(file: UploadState): boolean {
    return true;
  }

  /**
   * Setzt die File ID des hochgeladen Files in das Model
   *
   * @param file ID des Files
   */
  SetUploadValue(file: UploadState) {
    if (file === null) {
      super.setValue(null);
    } else {
      if (
        file.response !== undefined &&
        file.response !== null &&
        file.response.documentid !== null &&
        file.response.documentid !== undefined
      ) {
        super.setValue(file.response.documentid);
      } else {
        super.setValue(file.uploadId);
      }
    }
  }
}

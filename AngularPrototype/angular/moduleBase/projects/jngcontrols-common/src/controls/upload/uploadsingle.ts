import { NgUploadBase } from '../../common/baseuploadcontrol';
import { UploadState } from 'ngx-uploadx';

/**
 * Upload Komponente für ein einzelnes File
 */
export class NgUploadSingleCommon extends NgUploadBase<string>  {

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
    super.setValue(file.uploadId);
  }

}

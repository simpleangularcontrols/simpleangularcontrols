import { Directive, Input, OnInit } from '@angular/core';
import { UploadState } from 'ngx-uploadx';
import { NgUploadBase } from '../../common/baseuploadcontrol';

/**
 * Upload Komponente für ein einzelnes File
 */
@Directive()
export class NgDropzoneSingleCommon
  extends NgUploadBase<string>
  implements OnInit
{
  @Input()
  public uploadheight: string = null;

  /**
   * Property wenn Drag Event aktiv ist (Maus über Zone)
   */
  public active = false;

  /**
   * Ervent wenn das Control initialisert wird
   */
  ngOnInit() {
    super.ngOnInit();

    this.autoupload = true;
  }

  /**
   * Methode für Drag and Drop von Files
   * @param event Drag Event
   */
  dropHandler(event: DragEvent): void {
    if (
      !this.HasQueueItem() &&
      event.dataTransfer &&
      event.dataTransfer.files &&
      event.dataTransfer.files.item(0)
    ) {
      event.stopPropagation();
      event.preventDefault();
      this.active = false;

      if (event.dataTransfer.files.length == 1) {
        this.uploadService.handleFileList(event.dataTransfer.files);
      } else {
        this.onfileerror.emit('INVALID_DRAGDROP_MAXFILES');
      }
    }
  }

  /**
   * Methode wenn Drag in die Zone eintritt
   * @param event DragEnter Event
   */
  onDragOver(event: DragEvent): void {
    if (
      !this.HasQueueItem() &&
      event.dataTransfer &&
      event.dataTransfer.files &&
      event.dataTransfer.types.every((itm) => itm === 'Files') &&
      event.dataTransfer.types.length > 0
    ) {
      event.dataTransfer.dropEffect = 'copy';
      event.stopPropagation();
      event.preventDefault();
      this.active = true;
    }
  }

  /**
   * Methode wenn Drag die Zone verlässt
   * @param event DragLeave Event
   */
  onDragLeave(event: DragEvent): void {
    this.active = false;
  }

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

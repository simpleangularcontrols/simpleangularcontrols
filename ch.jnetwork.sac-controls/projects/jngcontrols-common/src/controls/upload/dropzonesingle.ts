import { Directive, Input, OnInit } from '@angular/core';
import { UploadState } from 'ngx-uploadx';
import { SacUploadBase } from '../../common/baseuploadcontrol';

/**
 * Upload Komponente für ein einzelnes File
 */
@Directive()
export class SacDropzoneSingleCommon
  extends SacUploadBase<string>
  implements OnInit
{
  // #region Properties

  /**
   * Höhe der Dropzone. Wert wird mit Einheit angegeben.
   */
  @Input()
  public uploadheight: string = null;

  /**
   * Property wenn Drag Event aktiv ist (Maus über Zone)
   */
  public active = false;

  // #endregion Properties

  // #region Public Methods

  /**
   * Macht keine Validierung in diesem Control
   *
   * @param file File das hinzugefügt wurde
   */
  public CustomAddValidation(file: UploadState): boolean {
    return true;
  }

  /**
   * Setzt die File ID des hochgeladen Files in das Model
   *
   * @param file ID des Files
   */
  public SetUploadValue(file: UploadState) {
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

  /**
   * Methode für Drag and Drop von Files
   * @param event Drag Event
   */
  public dropHandler(event: DragEvent): void {
    if (
      !this.HasQueueItem() &&
      event.dataTransfer &&
      event.dataTransfer.files &&
      event.dataTransfer.files.item(0)
    ) {
      event.stopPropagation();
      event.preventDefault();
      this.active = false;

      if (event.dataTransfer.files.length === 1) {
        this.uploadService.handleFileList(event.dataTransfer.files);
      } else {
        this.onfileerror.emit('INVALID_DRAGDROP_MAXFILES');
      }
    }
  }

  /**
   * Ervent wenn das Control initialisert wird
   */
  public ngOnInit() {
    super.ngOnInit();

    this.autoupload = true;
  }

  /**
   * Methode wenn Drag die Zone verlässt
   * @param event DragLeave Event
   */
  public onDragLeave(event: DragEvent): void {
    this.active = false;
  }

  /**
   * Methode wenn Drag in die Zone eintritt
   * @param event DragEnter Event
   */
  public onDragOver(event: DragEvent): void {
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

  // #endregion Public Methods
}

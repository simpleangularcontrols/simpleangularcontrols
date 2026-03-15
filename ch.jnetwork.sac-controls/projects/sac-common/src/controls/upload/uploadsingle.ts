import { SacUploadBase } from '../../common/baseuploadcontrol';
import { Directive, Input } from '@angular/core';
import { UploadState } from 'ngx-uploadx';

/**
 * Upload Komponente für ein einzelnes File
 */
@Directive()
export class SacUploadSingleCommon extends SacUploadBase<string> {
    // #region Properties

    /**
     * Label für Browse Button
     */
    @Input()
    public buttonbrowse = '';

    /**
     * Label für Upload Button
     */
    @Input()
    public buttonupload = '';

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

    // #endregion Public Methods

    // #region Protected Methods

    /**
     * @inheritdoc
     */
    protected GetMaxFiles(): number {
        return 1;
    }

    // #endregion Protected Methods
}

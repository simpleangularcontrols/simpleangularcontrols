import { SacUploadBase } from '../../common/baseuploadcontrol';
import { Directive, Input } from '@angular/core';
import { UploadState } from 'ngx-uploadx';

/**
 * Upload component for a single file
 */
@Directive()
export class SacUploadSingleCommon extends SacUploadBase<string> {
    // #region Properties

    /**
     * Label for Browse Button
     */
    @Input()
    public buttonbrowse = '';

    /**
     * Label for Upload Button
     */
    @Input()
    public buttonupload = '';

    // #endregion Properties

    // #region Public Methods

    /**
     * Does no validation in this control
     *
     * @param file File that was added
     */
    public CustomAddValidation(file: UploadState): boolean {
        return true;
    }

    /**
     * Sets the file ID of the uploaded file into the model
     *
     * @param file ID of the file
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

import { SacUploadBase } from '../../common/baseuploadcontrol';
import { Validation } from '../../validation';
import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { UploadState } from 'ngx-uploadx';

/**
 * Upload component for multiple files
 */
@Directive()
export class SacUploadMultipleCommon extends SacUploadBase<string[]> {
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

    /**
     * Max. files that can be uploaded. 0 disables the limit
     */
    @Input()
    public maxfiles = 0;

    /**
     * Min. files that must be uploaded. 0 disables the limit
     */
    @Input()
    public minfiles = 0;

    /**
     * Resource Key for Validation Message Required at Control
     */
    @Input() public validationmessageminfiles: string = this.validationKeyService.ValidationErrorFilesMin;

    /**
     * Resource Key for Validation Message Required in Validation Summary
     */
    @Input()
    public validationmessagesummaryminfiles: string = this.validationKeyService.ValidationErrorSummaryFilesMin;

    // #endregion Properties

    // #region Public Methods

    /**
     * Checks if the max. files in the queue are not exceeded
     *
     * @param file File that was added
     */
    public CustomAddValidation(file: UploadState): boolean {
        if (this.maxfiles > 0 && this.uploads.length >= this.maxfiles) {
            this.onfileerror.emit('INVALID_MAXFILES');
            return false;
        } else {
            return true;
        }
    }

    /**
     * Sets the file IDs of the uploaded files into the model
     *
     * @param file ID of the file that was uploaded.
     */
    public SetUploadValue(file: UploadState) {
        let documentid: string = null;
        if (file === null) {
            documentid = null;
        } else {
            if (
                file.response !== undefined &&
                file.response !== null &&
                file.response.documentid !== null &&
                file.response.documentid !== undefined
            ) {
                documentid = file.response.documentid;
            } else {
                documentid = file.uploadId;
            }

            // Update document ID so that value from server can be set in model.
            this.uploads
                .filter((itm) => itm !== null && itm.uploadId === file.uploadId)
                .forEach((itm) => {
                    itm.documentid = documentid;
                });
        }

        // List of Files
        const fileIds: string[] = [];

        // Add all Items with Uploaded State to Model
        this.uploads
            .filter((itm) => itm.status === 'complete')
            .forEach((itm) => {
                if (itm.documentid !== null && itm.documentid !== undefined) {
                    fileIds.push(itm.documentid);
                }
            });

        if (fileIds.length > 0) {
            super.setValue(fileIds);
        } else {
            super.setValue(null);
        }
    }

    /**
     * Validates the control
     *
     * @param c Control
     */
    public validateData(c: AbstractControl): ValidationErrors | null {
        let error: ValidationErrors | null = super.validateData(c);

        if (error === null) {
            error = Validation.minFiles(
                this.minfiles,
                this.validationmessageminfiles,
                this.validationmessagesummaryminfiles
            )(c);
        }

        return error;
    }

    // #endregion Public Methods

    // #region Protected Methods

    /**
     * @inheritdoc
     */
    protected GetMaxFiles(): number {
        return this.maxfiles;
    }

    // #endregion Protected Methods
}

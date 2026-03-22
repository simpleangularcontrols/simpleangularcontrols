import { SacUploadBase } from '../../common/baseuploadcontrol';
import { Directive, Input, OnInit } from '@angular/core';
import { UploadState } from 'ngx-uploadx';

/**
 * Upload component for a single file
 */
@Directive()
export class SacDropzoneSingleCommon extends SacUploadBase<string> implements OnInit {
    // #region Properties

    /**
     * Property when drag event is active (mouse over zone)
     */
    public active = false;

    /**
     * Height of the dropzone. Value is given with unit.
     */
    @Input()
    public uploadheight: string = null;

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

    /**
     * Method for drag and drop of files
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
                this.uploadService.handleFiles(event.dataTransfer.files);
            } else {
                this.onfileerror.emit('INVALID_DRAGDROP_MAXFILES');
            }
        }
    }

    /**
     * Event when the control is initialized
     */
    public ngOnInit() {
        super.ngOnInit();

        this.autoupload = true;
    }

    /**
     * Method when drag leaves the zone
     * @param event DragLeave Event
     */
    public onDragLeave(event: DragEvent): void {
        this.active = false;
    }

    /**
     * Method when drag enters the zone
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

    // #region Protected Methods

    /**
     * @inheritdoc
     */
    protected GetMaxFiles(): number {
        return 1;
    }

    // #endregion Protected Methods
}

/**
 * Payload structure for upload-complete events emitted by the uploader control.
 */
export interface ISacUploadEventCompleteState {
    // #region Properties

    /** File name of the uploaded file. */
    name: string;

    /** File size in bytes of the uploaded file. */
    size: number;

    /** Identifier of the uploaded file. */
    uploadid: string;

    // #endregion Properties
}

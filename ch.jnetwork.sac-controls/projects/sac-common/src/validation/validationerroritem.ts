/**
 * Class for validation errors
 * */
export class ValidationErrorItem {
    // #region Properties

    /**
     * Error Message Key
     */
    public errorMessageKey: string;

    /**
     * Error Message Key for Validation Summary
     */
    public errorMessageValidationSummaryKey: string;

    /**
     * Type of the error
     */
    public errorType: string;

    /**
     * Label or name of the field
     */
    public fieldName: string = null;

    /**
     * Map with parameters that can be used as placeholders in messages
     */
    public parameters: Map<string, any> = new Map<string, any>();

    // #endregion Properties

    // #region Constructors

    /**
     * Constructor
     * @param errorType Type of the error
     * @param errorMessageKey Key for error message
     * @param errorMessageSummaryKey Key for error message in Validation Summary
     * @param fieldName Name of the label or designation of the field
     */
    constructor(errorType: string, errorMessageKey: string, errorMessageSummaryKey: string, fieldName: string = null) {
        this.errorType = errorType;
        this.errorMessageKey = errorMessageKey;
        this.errorMessageValidationSummaryKey = errorMessageSummaryKey;
        this.fieldName = fieldName;
    }

    // #endregion Constructors
}

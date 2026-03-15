/**
 * Klasse für Validierungsfehler
 * */
export class ValidationErrorItem {
    // #region Properties

    /**
     * Error Message Key
     */
    public errorMessageKey: string;

    /**
     * Error Message Key für Validation Summary
     */
    public errorMessageValidationSummaryKey: string;

    /**
     * Typ den Fehler
     */
    public errorType: string;

    /**
     * Label oder Name des Feldes
     */
    public fieldName: string = null;

    /**
     * Map mit Parametern die in den Meldungen als Platzhalter verwendet werden können
     */
    public parameters: Map<string, any> = new Map<string, any>();

    // #endregion Properties

    // #region Constructors

    /**
     * Konstruktor
     * @param errorType Type des Fehlers
     * @param errorMessageKey Key für Fehlermeldung
     * @param errorMessageSummaryKey Key für Fehlermeldung in Validation Summary
     * @param fieldName Name des Labels oder Bezeichnung des Feldes
     */
    constructor(errorType: string, errorMessageKey: string, errorMessageSummaryKey: string, fieldName: string = null) {
        this.errorType = errorType;
        this.errorMessageKey = errorMessageKey;
        this.errorMessageValidationSummaryKey = errorMessageSummaryKey;
        this.fieldName = fieldName;
    }

    // #endregion Constructors
}

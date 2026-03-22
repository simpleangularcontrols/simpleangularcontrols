import { ValidationErrorItem } from './validationerroritem';

// #region Exported Functions

/**
 * Creates a structured validation error object for validation result reporting.
 *
 * @param errorType Identifier for the validation error type (e.g. 'required', 'invalid').
 * @param errorMessageKey Resource key used for the control-level error text.
 * @param errorMessageValidationSummaryKey Resource key used for summary-level error text.
 * @param parameters Optional placeholder parameters to replace in error messages.
 * @returns The generated validation error object.
 */
export function CreateValidationError(
    errorType: string,
    errorMessageKey: string,
    errorMessageValidationSummaryKey: string,
    parameters: Map<string, any> = new Map<string, any>()
): any {
    const item: ValidationErrorItem = new ValidationErrorItem(
        errorType,
        errorMessageKey,
        errorMessageValidationSummaryKey
    );

    if (parameters !== null && parameters !== undefined && parameters.size > 0) {
        parameters.forEach((v, k) => {
            item.parameters.set(k, v);
        });
    }

    return { [errorType]: item };
}

// #endregion Exported Functions

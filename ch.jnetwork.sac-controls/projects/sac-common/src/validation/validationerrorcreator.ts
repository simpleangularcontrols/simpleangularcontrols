import { ValidationErrorItem } from './validationerroritem';

// #region Exported Functions

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

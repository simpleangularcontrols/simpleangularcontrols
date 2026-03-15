/**
 * Checks if an object is defined
 * @param value Object
 * @return Object is defined. TRUE if object is defined. FALSE if object is NULL or UNDEFINED.
 */
// #region Exported Functions

export function isDefined(value: any): boolean {
    return typeof value !== 'undefined' && value !== null;
}

// #endregion Exported Functions

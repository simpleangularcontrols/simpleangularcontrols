/**
 * Prüft ob ein Objekt Defined ist
 * @param value Objekt
 * @return Objekt ist definied. TRUE wenn Objekt definied. FALSE wenn Objekt NULL oder UNDEFINED.
 */
// #region Exported Functions

export function isDefined(value: any): boolean {
    return typeof value !== 'undefined' && value !== null;
}

// #endregion Exported Functions

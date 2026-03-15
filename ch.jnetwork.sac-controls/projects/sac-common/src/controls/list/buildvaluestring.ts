/**
 * Function um ein Key Value Pair für das Dropdown zu erzeugen
 * @param id ID
 * @param value Wert der an das Element gebunden werden soll
 */
// #region Exported Functions

export function _buildValueString(id: string | null, value: any): string {
    // Wenn ID null ist Object zurückgeben
    if (id == null) {
        return `${value}`;
    }

    // Mapping Objekt zu String
    if (value && typeof value === 'object') {
        value = 'Object';
    }

    // String als ID
    return `${id}: ${value}`.slice(0, 50);
}

// #endregion Exported Functions

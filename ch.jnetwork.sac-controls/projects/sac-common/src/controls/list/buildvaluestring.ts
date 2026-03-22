/**
 * Function to generate a key value pair for the dropdown
 * @param id ID
 * @param value Value that should be bound to the element
 */
// #region Exported Functions

export function _buildValueString(id: string | null, value: any): string {
    // If ID is null return object
    if (id == null) {
        return `${value}`;
    }

    // Mapping object to string
    if (value && typeof value === 'object') {
        value = 'Object';
    }

    // String as ID
    return `${id}: ${value}`.slice(0, 50);
}

// #endregion Exported Functions

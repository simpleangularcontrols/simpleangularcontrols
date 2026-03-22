/**
 * Creates a boolean
 * @param value
 */
// #region Exported Functions

export function convertToBoolean(value: any): boolean {
    if (value === null || value === undefined || typeof value === 'boolean') {
        return value;
    }

    return value.toString() === 'true';
}

/**
 * Creates a number
 * @param value
 */
export function convertToNumber(value: any): number {
    if (value === null || value === undefined || typeof value === 'number') {
        return value;
    }

    return parseFloat(value.toString());
}

/**
 * Creates an object from a Map
 * @param map Map with keys and values. Key is a string. Value can be an object.
 */
export function mapToObject(map: Map<string, any>): any {
    const obj = {};
    map.forEach((v, k) => {
        obj[k] = v;
    });
    return obj;
}

// #endregion Exported Functions

/**
 * Erzeugt ein Boolean
 * @param value
 */
export function convertToBoolean(value: any): boolean {
  if (value === null || value === undefined || typeof value === 'boolean') {
    return value;
  }

  return value.toString() === 'true';
}

/**
 * Erzeugt ein Number
 * @param value
 */
export function convertToNumber(value: any): number {
  if (value === null || value === undefined || typeof value === 'number') {
    return value;
  }

  return parseFloat(value.toString());
}


/**
 * Erzeugt aus einer Map ein Objekt
 * @param map Map mit Key und Values. Key ist ein String. Value kann ein Objekt sein.
 */
export function mapToObject(map: Map<string, any>): any {
  const obj = {};
  map.forEach((v, k) => {
    obj[k] = v;
  });
  return obj;
}

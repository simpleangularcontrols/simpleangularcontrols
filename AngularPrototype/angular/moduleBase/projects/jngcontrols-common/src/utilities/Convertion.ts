export function convertToBoolean(value: any): boolean {
  return value !== null && value !== undefined && '${value}'.toLowerCase() !== 'false';
}

/**
 * Erzeugt aus einer Map ein Objekt
 * @param map Map mit Key und Values. Key ist ein String. Value kann ein Objekt sein.
 */
export function mapToObject(map: Map<string, any>): any {
  const obj = {};
  map.forEach((v, k) => { obj[k] = v });
  return obj;
}

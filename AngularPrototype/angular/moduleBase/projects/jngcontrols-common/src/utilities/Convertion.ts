export function convertToBoolean(value: any): boolean {
  return value !== null && value !== undefined && '${value}'.toLowerCase() !== 'false';
}

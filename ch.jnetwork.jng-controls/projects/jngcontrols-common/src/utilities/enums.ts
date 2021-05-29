/**
 * Enum für Tooltip Positionen
 */
export enum TooltipPosition {
  none = 0,
  // tslint:disable-next-line:no-bitwise
  top = 1 << 0,
  // tslint:disable-next-line:no-bitwise
  right = 1 << 1,
  // tslint:disable-next-line:no-bitwise
  bottom = 1 << 2,
  // tslint:disable-next-line:no-bitwise
  left = 1 << 3
}

/**
 * Enum for tooltip positions
 */
export enum TooltipPosition {
    none = 0,
    // eslint-disable-next-line no-bitwise
    top = 1 << 0,
    // eslint-disable-next-line no-bitwise
    right = 1 << 1,
    // eslint-disable-next-line no-bitwise
    bottom = 1 << 2,
    // eslint-disable-next-line no-bitwise
    left = 1 << 3,
    // eslint-disable-next-line no-bitwise
    topend = 1 << 4,
    // eslint-disable-next-line no-bitwise
    bottomend = 1 << 5,
}

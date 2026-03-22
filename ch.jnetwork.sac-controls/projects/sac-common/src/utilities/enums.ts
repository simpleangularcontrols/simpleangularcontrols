/**
 * Enum for tooltip positions.
 */
export enum TooltipPosition {
    /** No position / not displayed. */
    none = 0,

    /** Positioned above the reference element. */
    top = 1 << 0,

    /** Positioned to the right of the reference element. */
    right = 1 << 1,

    /** Positioned below the reference element. */
    bottom = 1 << 2,

    /** Positioned to the left of the reference element. */
    left = 1 << 3,

    /** Positioned at top-end (top aligned with end/RTL-aware). */
    topend = 1 << 4,

    /** Positioned at bottom-end (bottom aligned with end/RTL-aware). */
    bottomend = 1 << 5,
}

// #region Exported Interfaces

/**
 * Represents geometry of a rectangular area in client coordinates.
 */
export interface ClientRect {
    // #region Properties

    /** Distance from top of viewport to bottom edge in pixels. */
    bottom: number;

    /** Height of rectangle in pixels. */
    height: number;

    /** Distance from left of viewport to left edge in pixels. */
    left: number;

    /** Distance from left of viewport to right edge in pixels. */
    right: number;

    /** Distance from top of viewport to top edge in pixels. */
    top: number;

    /** Width of rectangle in pixels. */
    width: number;

    // #endregion Properties
}

// #endregion Exported Interfaces

// #region Exported Classes

/**
 * Utility class for element positioning and offset calculations.
 *
 * Provides helpers to compute absolute offset, relative position and placement
 * of one element relative to another, including viewport clipping checks.
 *
 * @see https://github.com/ng-bootstrap/ng-bootstrap/blob/master/src/util/positioning.ts
 */
export class PositionCalculator {
    // #region Public Methods

    /**
     * Computes the offset of an element relative to the document.
     *
     * @param element Element to measure.
     * @param round If true, the computed values are rounded to integers.
     * @returns ClientRect with top/left/right/bottom/width/height position values.
     */
    public offset(element: HTMLElement, round = true): ClientRect {
        const elBcr = element.getBoundingClientRect();
        const viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft,
        };

        const elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left,
        };

        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }

        return elOffset;
    }

    /**
     * Computes the position of an element relative to its offset parent.
     *
     * @param element Element to measure.
     * @param round If true, the computed position values are rounded.
     * @returns ClientRect with relative top/left/right/bottom/width/height values.
     */
    public position(element: HTMLElement, round = true): ClientRect {
        let elPosition: ClientRect;
        let parentOffset: ClientRect = {
            width: 0,
            height: 0,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        };

        if (this.getStyle(element, 'position') === 'fixed') {
            elPosition = element.getBoundingClientRect();
            elPosition = {
                top: elPosition.top,
                bottom: elPosition.bottom,
                left: elPosition.left,
                right: elPosition.right,
                height: elPosition.height,
                width: elPosition.width,
            };
        } else {
            const offsetParentEl = this.offsetParent(element);

            elPosition = this.offset(element, false);

            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }

            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }

        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;

        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }

        return elPosition;
    }

    /**
     * Positions targetElement relative to hostElement based on placement and optionally appends to body.
     *
     * @param hostElement Reference element used as anchor.
     * @param targetElement Element being positioned.
     * @param placement Positioning string like 'top', 'bottom-right'.
     * @param appendToBody If true, hostElement coords are based on document body.
     * @returns True when target element stays within viewport after positioning.
     */
    public positionElements(
        hostElement: HTMLElement,
        targetElement: HTMLElement,
        placement: string,
        appendToBody?: boolean
    ): boolean {
        const [placementPrimary = 'top', placementSecondary = 'center'] = placement.split('-');

        const hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        const targetElStyles = this.getAllStyles(targetElement);

        const marginTop = parseFloat(targetElStyles.marginTop);
        const marginBottom = parseFloat(targetElStyles.marginBottom);
        const marginLeft = parseFloat(targetElStyles.marginLeft);
        const marginRight = parseFloat(targetElStyles.marginRight);

        let topPosition = 0;
        let leftPosition = 0;

        switch (placementPrimary) {
            case 'top':
                topPosition = hostElPosition.top - (targetElement.offsetHeight + marginTop + marginBottom);
                break;
            case 'bottom':
                topPosition = hostElPosition.top + hostElPosition.height;
                break;
            case 'left':
                leftPosition = hostElPosition.left - (targetElement.offsetWidth + marginLeft + marginRight);
                break;
            case 'right':
                leftPosition = hostElPosition.left + hostElPosition.width;
                break;
        }

        switch (placementSecondary) {
            case 'top':
                topPosition = hostElPosition.top;
                break;
            case 'bottom':
                topPosition = hostElPosition.top + hostElPosition.height - targetElement.offsetHeight;
                break;
            case 'left':
                leftPosition = hostElPosition.left;
                break;
            case 'right':
                leftPosition = hostElPosition.left + hostElPosition.width - targetElement.offsetWidth;
                break;
            case 'center':
                if (placementPrimary === 'top' || placementPrimary === 'bottom') {
                    leftPosition = hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2;
                } else {
                    topPosition = hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2;
                }
                break;
        }

        // The translate3d/gpu acceleration render a blurry text on chrome, the next line is commented until a browser fix
        // targetElement.style.transform = `translate3d(${Math.round(leftPosition)}px, ${Math.floor(topPosition)}px, 0px)`;
        targetElement.style.transform = `translate(${Math.round(leftPosition)}px, ${Math.round(topPosition)}px)`;

        // Check if the targetElement is inside the viewport
        const targetElBCR = targetElement.getBoundingClientRect();
        const html = document.documentElement;
        const windowHeight = window.innerHeight || html.clientHeight;
        const windowWidth = window.innerWidth || html.clientWidth;

        return (
            targetElBCR.left >= 0 &&
            targetElBCR.top >= 0 &&
            targetElBCR.right <= windowWidth &&
            targetElBCR.bottom <= windowHeight
        );
    }

    // #endregion Public Methods

    // #region Private Methods

    /**
     * Returns the computed style declarations for the given element.
     *
     * @param element Element to retrieve styles from.
     * @returns CSSStyleDeclaration of computed styles.
     */
    private getAllStyles(element: HTMLElement) {
        return window.getComputedStyle(element);
    }

    /**
     * Returns the computed value of a CSS property for an element.
     *
     * @param element Element to query.
     * @param prop Name of CSS property.
     * @returns Property value string.
     */
    private getStyle(element: HTMLElement, prop: string): string {
        return this.getAllStyles(element)[prop];
    }

    /**
     * Checks whether an element is statically positioned in CSS.
     *
     * @param element Element to inspect.
     * @returns True when the position is 'static'.
     */
    private isStaticPositioned(element: HTMLElement): boolean {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    }

    /**
     * Gets the closest positioned ancestor element (offset parent) for a given element.
     *
     * @param element Element to find offset parent for.
     * @returns Offset parent HTMLElement, or document.documentElement fallback.
     */
    private offsetParent(element: HTMLElement): HTMLElement {
        let offsetParentEl = <HTMLElement>element.offsetParent || document.documentElement;

        while (
            offsetParentEl &&
            offsetParentEl !== document.documentElement &&
            this.isStaticPositioned(offsetParentEl)
        ) {
            offsetParentEl = <HTMLElement>offsetParentEl.offsetParent;
        }

        return offsetParentEl || document.documentElement;
    }

    // #endregion Private Methods
}

// #endregion Exported Classes

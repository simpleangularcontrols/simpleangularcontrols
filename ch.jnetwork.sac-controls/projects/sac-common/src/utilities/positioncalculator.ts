// #region Exported Interfaces

export interface ClientRect {
    // #region Properties

    bottom: number;
    height: number;
    left: number;
    right: number;
    top: number;
    width: number;

    // #endregion Properties
}

// #endregion Exported Interfaces

// #region Exported Classes

/**
 * Position Utility Klasse
 * @see https://github.com/ng-bootstrap/ng-bootstrap/blob/master/src/util/positioning.ts
 */
export class PositionCalculator {
    // #region Public Methods

    /**
     * Get Offset of Item
     * @param element HTML Element for Offset
     * @param round Round the Values
     * @returns Return Offset Position
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
     * Get Element Position
     * @param element HTML Element for Position
     * @param round Round Values
     * @returns Position Values
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
     * Return false if the element to position is outside the viewport
     * @returns position is inside viewport
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

        /// The translate3d/gpu acceleration render a blurry text on chrome, the next line is commented until a browser fix
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
     * Get all Styles of Element
     * @param element HTML Element
     * @returns All Styles of element
     */
    private getAllStyles(element: HTMLElement) {
        return window.getComputedStyle(element);
    }

    /**
     * Get Style value of element
     * @param element HTML Element
     * @param prop Style
     * @returns Value of Style
     */
    private getStyle(element: HTMLElement, prop: string): string {
        return this.getAllStyles(element)[prop];
    }

    /**
     * Check if the element has an static position
     * @param element HTML Element
     * @returns Item has a static position
     */
    private isStaticPositioned(element: HTMLElement): boolean {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    }

    /**
     * Get the Offset of the parent element
     * @param element HTML Element
     * @returns HTML ELement
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

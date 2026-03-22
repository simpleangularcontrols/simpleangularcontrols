import { PositionCalculator } from './positioncalculator';

// #region Exported Functions

/**
 * Accept the placement array and applies the appropriate placement dependent on the viewport.
 * Returns the applied placement.
 * In case of auto placement, placements are selected in order
 * 'top', 'bottom', 'left', 'right',
 * 'top-left', 'top-right',
 * 'bottom-left', 'bottom-right',
 * 'left-top', 'left-bottom',
 * 'right-top', 'right-bottom'.
 * @param hostElement The host element
 * @param targetElement The target element to be positioned
 * @param placement The placement option(s)
 * @param appendToBody Whether to append to body
 * @param baseClass The base CSS class
 * @returns The applied placement or null if not positioned
 */
export function positionElements(
    hostElement: HTMLElement,
    targetElement: HTMLElement,
    placement: string | Placement | PlacementArray,
    appendToBody?: boolean,
    baseClass?: string
): Placement | null {
    const placementVals: Array<Placement> = Array.isArray(placement)
        ? placement
        : (placement.split(placementSeparator) as Array<Placement>);

    const allowedPlacements = [
        'top',
        'bottom',
        'left',
        'right',
        'top-left',
        'top-right',
        'bottom-left',
        'bottom-right',
        'left-top',
        'left-bottom',
        'right-top',
        'right-bottom',
    ];

    const classList = targetElement.classList;
    const addClassesToTarget = (targetPlacement: Placement): Array<string> => {
        const [primary, secondary] = targetPlacement.split('-');
        const classes: string[] = [];
        if (baseClass) {
            classes.push(`${baseClass}-${primary}`);
            if (secondary) {
                classes.push(`${baseClass}-${primary}-${secondary}`);
            }

            classes.forEach((classname) => {
                classList.add(classname);
            });
        }
        return classes;
    };

    // Remove old placement classes to avoid issues
    if (baseClass) {
        allowedPlacements.forEach((placementToRemove) => {
            classList.remove(`${baseClass}-${placementToRemove}`);
        });
    }

    // replace auto placement with other placements
    let hasAuto = placementVals.findIndex((val) => val === 'auto');
    if (hasAuto >= 0) {
        allowedPlacements.forEach(function (obj) {
            if (placementVals.find((val) => val.search('^' + obj) !== -1) == null) {
                placementVals.splice(hasAuto++, 1, obj as Placement);
            }
        });
    }

    // coordinates where to position

    // Required for transform:
    const style = targetElement.style;
    style.position = 'absolute';
    style.top = '0';
    style.left = '0';
    style['will-change'] = 'transform';

    let testPlacement: Placement | null = null;
    let isInViewport = false;
    for (testPlacement of placementVals) {
        const addedClasses = addClassesToTarget(testPlacement);

        if (positionService.positionElements(hostElement, targetElement, testPlacement, appendToBody)) {
            isInViewport = true;
            break;
        }

        // Remove the baseClasses for further calculation
        if (baseClass) {
            addedClasses.forEach((classname) => {
                classList.remove(classname);
            });
        }
    }

    if (!isInViewport) {
        // If nothing match, the first placement is the default one
        testPlacement = placementVals[0];
        addClassesToTarget(testPlacement);
        positionService.positionElements(hostElement, targetElement, testPlacement, appendToBody);
    }

    return testPlacement;
}

// #endregion Exported Functions

// #region Variables

/**
 * Placement Separator Regex
 */
const placementSeparator = /\s+/;

/**
 * Global Position Service
 */
export const positionService = new PositionCalculator();

// #endregion Variables

// #region Exported Types

/**
 * Placement Typen
 */
export type Placement =
    | 'auto'
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | 'left-top'
    | 'left-bottom'
    | 'right-top'
    | 'right-bottom';

/**
 * Placement Array
 */
export type PlacementArray = Placement | Array<Placement> | string;

// #endregion Exported Types

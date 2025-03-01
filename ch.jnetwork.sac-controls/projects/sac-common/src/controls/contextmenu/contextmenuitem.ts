import { ISacContextmenuCommon } from './contextmenu.interface';
import { Directive, Input } from '@angular/core';

/**
 * Base Context Menu Item
 */
@Directive()
export class SacContextmenuItemCommon {
    // #region Properties

    /**
     * Reference to the higher-level context menu. This property is always set automatically by the context menu. However, it may be necessary to set the reference manually.
     */
    @Input()
    public contextmenu: ISacContextmenuCommon | null = null;

    // #endregion Properties
}

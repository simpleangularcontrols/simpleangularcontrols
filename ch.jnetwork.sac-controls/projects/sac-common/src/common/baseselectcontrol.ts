import { SacBaseListControl } from './baselistcontrol';
import { Directive, Input } from '@angular/core';

/**
 * Abstract class for SacBaseSelectControl. Extends SacBaseListControl
 */
@Directive()
export abstract class SacBaseSelectControl<VALUE> extends SacBaseListControl<VALUE> {
    // #region Properties

    /**
     * Defines the collection of items in the group element
     */
    @Input() public groupitems = '';

    /**
     * Defines the label for the group element
     */
    @Input() public grouplabel = 'label';

    // #endregion Properties
}

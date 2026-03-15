import { SacBaseListControl } from './baselistcontrol';
import { Directive, Input } from '@angular/core';

/**
 * Abstract Klasse für SacBaseSelectControl. Extendes SacBaseListControl
 */
@Directive()
export abstract class SacBaseSelectControl<VALUE> extends SacBaseListControl<VALUE> {
    // #region Properties

    /**
     * Definiert die Collection der Items im Group Element
     */
    @Input() public groupitems: string = '';

    /**
     * Definiert das Label für das Group Element
     */
    @Input() public grouplabel: string = 'label';

    // #endregion Properties
}

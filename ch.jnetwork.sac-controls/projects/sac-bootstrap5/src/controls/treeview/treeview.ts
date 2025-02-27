import { SacContextmenuComponent } from '../contextmenu';
import { SacContextmenuItemButtonComponent } from '../contextmenu/contextmenuitembutton';
import { SacContextmenuItemSplitterComponent } from '../contextmenu/contextmenuitemsplitter';
import { JsonPipe, NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, Injector } from '@angular/core';
import { SacTreeviewCommon } from '@simpleangularcontrols/sac-common';

/**
 * Treeview Compomnent
 */
@Component({
    selector: 'sac-treeview',
    templateUrl: './treeview.html',
    standalone: true,
    imports: [
        NgIf,
        JsonPipe,
        NgFor,
        NgTemplateOutlet,
        NgClass,
        SacContextmenuComponent,
        SacContextmenuItemButtonComponent,
        SacContextmenuItemSplitterComponent,
    ],
})
export class SacTreeviewComponent extends SacTreeviewCommon {
    // #region Constructors

    /**
     * Constructor
     * @param injector Component Injector
     */
    constructor(injector: Injector) {
        super(injector);
    }

    // #endregion Constructors
}

import { Component, forwardRef } from '@angular/core';
import { SacContextmenuItemCommon } from '@simpleangularcontrols/sac-common';

/**
 * Splitter component in context menu
 */
@Component({
    selector: 'sac-contextmenusplitter',
    templateUrl: './contextmenuitemsplitter.html',
    standalone: true,
    providers: [
        {
            provide: SacContextmenuItemCommon,
            useExisting: forwardRef(() => SacContextmenuItemSplitterComponent),
        },
    ],
})
export class SacContextmenuItemSplitterComponent extends SacContextmenuItemCommon {}

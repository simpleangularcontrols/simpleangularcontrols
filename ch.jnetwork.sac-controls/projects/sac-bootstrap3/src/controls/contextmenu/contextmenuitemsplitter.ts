import { Component, forwardRef } from '@angular/core';
import { SacContextmenuItemCommon } from '@simpleangularcontrols/sac-common';

/**
 * Splitter Komponente in Context Menü
 */
@Component({
    selector: 'sac-contextmenusplitter',
    templateUrl: './contextmenuitemsplitter.html',
    providers: [
        {
            provide: SacContextmenuItemCommon,
            useExisting: forwardRef(() => SacContextmenuItemSplitterComponent),
        },
    ],
})
export class SacContextmenuItemSplitterComponent extends SacContextmenuItemCommon {}

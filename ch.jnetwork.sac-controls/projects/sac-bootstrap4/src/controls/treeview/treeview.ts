import { SacContextmenuComponent } from '../contextmenu';
import { SacContextmenuItemButtonComponent } from '../contextmenu/contextmenuitembutton';
import { SacContextmenuItemSplitterComponent } from '../contextmenu/contextmenuitemsplitter';
import { SacFormLayoutDirective } from '../layout/formlayout.directive';
import { SacToControlHeightPipe } from '../layout/tocontrolheight.pipe';
import { SacToControlWidthCssPipe } from '../layout/tocontrolwidthcss.pipe';
import { SacToLabelHeightPipe } from '../layout/tolabelheight.pipe';
import { SacToLabelWidthCssPipe } from '../layout/tolabelwidthcss.pipe';
import { SacTooltipComponent } from '../tooltip/tooltip';
import { AsyncPipe, JsonPipe, NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, Host, Injector, Optional, forwardRef } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacTreeviewCommon } from '@simpleangularcontrols/sac-common';

/**
 * Treeview Compomnent
 */
@Component({
    selector: 'sac-treeview',
    templateUrl: './treeview.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: SacTreeviewComponent,
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => SacTreeviewComponent),
            multi: true,
        },
    ],
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
        SacToLabelWidthCssPipe,
        SacToLabelHeightPipe,
        SacTooltipComponent,
        SacToControlWidthCssPipe,
        AsyncPipe,
        SacToControlHeightPipe,
    ],
})
export class SacTreeviewComponent extends SacTreeviewCommon {
    // #region Constructors

    /**
     * Constructor
     * @param formLayout SacFormLayout to define scoped layout settings
     * @param injector Component Injector
     */
    constructor(@Host() @Optional() formLayout: SacFormLayoutDirective, injector: Injector) {
        super(formLayout, injector);
    }

    // #endregion Constructors
}

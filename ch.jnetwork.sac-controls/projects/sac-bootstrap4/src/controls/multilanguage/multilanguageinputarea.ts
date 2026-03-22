import { SacFormLayoutDirective } from '../layout/formlayout.directive';
import { SacToControlHeightPipe } from '../layout/tocontrolheight.pipe';
import { SacToControlWidthCssPipe } from '../layout/tocontrolwidthcss.pipe';
import { SacToLabelHeightPipe } from '../layout/tolabelheight.pipe';
import { SacToLabelWidthCssPipe } from '../layout/tolabelwidthcss.pipe';
import { SacTooltipComponent } from '../tooltip/tooltip';
import { SacMultilanguagemenuComponent } from './multilanguagemenu';
import { SacMultilanguagemenuAnchorDirective } from './multilanguagemenuanchor';
import { SacMultilanguagemenuItemButtonComponent } from './multilanguagemenuitembutton';
import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Host, Injector, Optional, forwardRef } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IconType, SacMultilanguageInputAreaCommon, SacTestingAttributePipe } from '@simpleangularcontrols/sac-common';

/**
 * Component for multilanguage texts as multiline text
 */
@Component({
    selector: 'sac-multilanguageinputarea',
    templateUrl: './multilanguageinputarea.html',
    // Register Value Access Provider so the value can be written and read via model
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: SacMultilanguageInputAreaComponent,
        },
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: forwardRef(() => SacMultilanguageInputAreaComponent),
        },
    ],
    standalone: true,
    imports: [
        NgClass,
        SacMultilanguagemenuComponent,
        SacMultilanguagemenuAnchorDirective,
        NgIf,
        NgFor,
        AsyncPipe,
        SacMultilanguagemenuItemButtonComponent,
        SacToLabelWidthCssPipe,
        SacToControlWidthCssPipe,
        SacToLabelHeightPipe,
        SacToControlHeightPipe,
        SacTooltipComponent,
        SacTestingAttributePipe,
    ],
})
export class SacMultilanguageInputAreaComponent extends SacMultilanguageInputAreaCommon {
    // #region Properties

    /**
     * Enum for IconType in HTML template
     */
    public IconType = IconType;

    // #endregion Properties

    // #region Constructors

    /**
     * Constructor
     * @param formLayout SacFormLayout to define scoped layout settings
     * @param injector Injector for injecting services
     */
    constructor(@Host() @Optional() formLayout: SacFormLayoutDirective, injector: Injector) {
        super(formLayout, injector);
    }

    // #endregion Constructors
}

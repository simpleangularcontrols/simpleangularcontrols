import {
    SacBrowserComponent,
    SacToControlHeightPipe,
    SacToControlWidthCssPipe,
    SacToLabelWidthCssPipe,
} from '../../public_api';
import { SacButtonComponent } from '../buttons';
import { SacDialogComponent } from '../dialog';
import { SacFormLayoutDirective } from '../layout/formlayout.directive';
import { SacToLabelHeightPipe } from '../layout/tolabelheight.pipe';
import { SacTooltipComponent } from '../tooltip/tooltip';
import { AsyncPipe, NgClass, NgIf } from '@angular/common';
import { Component, Host, Injector, NgZone, Optional, forwardRef } from '@angular/core';
import { FormsModule, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SacTestingAttributePipe, SacTinyMceCommon } from '@simpleangularcontrols/sac-common';
import { EditorComponent } from '@tinymce/tinymce-angular';

/**
 * TinyMCE component
 */
@Component({
    selector: 'sac-tinymce',
    templateUrl: './tinymce.html',
    styleUrls: ['./tinymce.scss'],
    // Register Value Access Provider so the value can be written and read via model
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: SacTinyMceComponent,
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => SacTinyMceComponent),
            multi: true,
        },
    ],
    standalone: true,
    imports: [
        NgClass,
        EditorComponent,
        FormsModule,
        NgIf,
        SacDialogComponent,
        SacBrowserComponent,
        SacButtonComponent,
        AsyncPipe,
        SacToLabelWidthCssPipe,
        SacToControlWidthCssPipe,
        SacToLabelHeightPipe,
        SacTooltipComponent,
        SacToControlHeightPipe,
        SacTestingAttributePipe,
    ],
})
export class SacTinyMceComponent extends SacTinyMceCommon {
    // #region Constructors

    /**
     * Constructor
     * @param formLayout SacFormLayout to define scoped layout settings
     * @param injector Injector for injecting services
     * @param ngZone ngZone to manage external javascripts
     */
    constructor(@Host() @Optional() formLayout: SacFormLayoutDirective, injector: Injector, ngZone: NgZone) {
        super(formLayout, injector, ngZone);
    }

    // #endregion Constructors

    // #region Public Methods

    /**
     * overwrite tinymce defaults
     * @returns boostrap4 has no overwrites
     */
    public overwriteDefaultSettings() {
        return {};
    }

    // #endregion Public Methods
}

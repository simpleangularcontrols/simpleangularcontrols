import { Component } from '@angular/core';
import { SacConfirmCommon } from '@simpleangularcontrols/sac-common';
import { SacButtonComponent } from '../buttons/button';
import { NgIf, NgFor } from '@angular/common';
import { SacDialogComponent } from '../dialog/dialog';

/**
 * Confirm Komponente
 */
@Component({
    selector: 'sac-confirm',
    templateUrl: './confirm.html',
    standalone: true,
    imports: [
        SacDialogComponent,
        NgIf,
        NgFor,
        SacButtonComponent,
    ],
})
export class SacConfirmComponent extends SacConfirmCommon {}

import { SacButtonComponent } from '../buttons/button';
import { SacDialogComponent } from '../dialog/dialog';
import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { SacConfirmCommon } from '@simpleangularcontrols/sac-common';

/**
 * Bootstrap 3 confirmation dialog component that extends common confirm behavior.
 */
@Component({
    selector: 'sac-confirm',
    templateUrl: './confirm.html',
    standalone: true,
    imports: [SacDialogComponent, NgIf, NgFor, SacButtonComponent],
})
export class SacConfirmComponent extends SacConfirmCommon {}

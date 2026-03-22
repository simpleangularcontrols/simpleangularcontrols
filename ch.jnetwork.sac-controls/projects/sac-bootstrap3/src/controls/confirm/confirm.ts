import { Component } from '@angular/core';
import { SacConfirmCommon } from '@simpleangularcontrols/sac-common';

/**
 * Bootstrap 3 confirmation dialog component that extends common confirm behavior.
 */
@Component({
    selector: 'sac-confirm',
    templateUrl: './confirm.html',
})
export class SacConfirmComponent extends SacConfirmCommon {}

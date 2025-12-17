import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SacGridImageCommon } from '@simpleangularcontrols/sac-common';

/**
 * Image Item für Grid
 */
@Component({
    selector: 'sac-gridimage',
    templateUrl: './gridimage.html',
    imports: [CommonModule],
    standalone: true,
})
export class SacGridImageComponent extends SacGridImageCommon {}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SacGridImageCommon } from '@simpleangularcontrols/sac-common';

/**
 * Bootstrap 3 implementation of the grid image control.
 * Extends common grid image behavior and rendering for this UI variant.
 */
@Component({
    selector: 'sac-gridimage',
    templateUrl: './gridimage.html',
    imports: [CommonModule],
    standalone: true,
})
export class SacGridImageComponent extends SacGridImageCommon {}

import { Component } from '@angular/core';
import { SacDateSelectorCommon } from '@simpleangularcontrols/sac-common';
import { NgIf, NgFor, NgStyle, NgClass } from '@angular/common';

/**
 * DateTime Selektor Komponente
 */
@Component({
    selector: 'sac-dateselector',
    templateUrl: './dateselector.html',
    standalone: true,
    imports: [
        NgIf,
        NgFor,
        NgStyle,
        NgClass,
    ],
})
export class SacDateSelectorComponent extends SacDateSelectorCommon {}

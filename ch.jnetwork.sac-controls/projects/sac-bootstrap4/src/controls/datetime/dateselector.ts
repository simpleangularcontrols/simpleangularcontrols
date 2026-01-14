import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { SacDateSelectorCommon, SacTestingAttributePipe } from '@simpleangularcontrols/sac-common';

/**
 * DateTime Selektor Komponente
 */
@Component({
    selector: 'sac-dateselector',
    templateUrl: './dateselector.html',
    standalone: true,
    imports: [NgIf, NgFor, NgStyle, NgClass, SacTestingAttributePipe],
})
export class SacDateSelectorComponent extends SacDateSelectorCommon {}

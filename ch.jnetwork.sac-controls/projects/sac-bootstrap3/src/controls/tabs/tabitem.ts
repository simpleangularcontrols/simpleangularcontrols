import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { SacTabItemCommon } from '@simpleangularcontrols/sac-common';

/**
 * Bootstrap 3 tab item component that defines content and metadata for a single tab.
 */
@Component({
    selector: 'sac-tabitem',
    templateUrl: './tabitem.html',
    standalone: true,
    imports: [NgIf, NgTemplateOutlet],
})
export class SacTabItemComponent extends SacTabItemCommon {}

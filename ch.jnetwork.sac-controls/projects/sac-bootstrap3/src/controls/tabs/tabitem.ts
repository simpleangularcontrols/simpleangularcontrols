import { Component, } from '@angular/core';
import { SacTabItemCommon } from '@simpleangularcontrols/sac-common';
import { NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
    selector: 'sac-tabitem',
    templateUrl: './tabitem.html',
    standalone: true,
    imports: [NgIf, NgTemplateOutlet]
})
export class SacTabItemComponent extends SacTabItemCommon {

}


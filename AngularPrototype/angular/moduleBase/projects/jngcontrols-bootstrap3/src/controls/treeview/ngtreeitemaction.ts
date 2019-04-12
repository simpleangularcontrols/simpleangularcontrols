import { Component,  ElementRef } from '@angular/core';
import { NgTreeItemActionCommon } from '@jnetwork/jngcontrols-common';


@Component({
    selector: 'ngTreeItemAction',
    templateUrl: './ngtreeitemaction.html'
})
export class NgTreeItemAction extends NgTreeItemActionCommon {

    constructor(el: ElementRef) {
        super(el);
      }

}

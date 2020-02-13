import { Component, ElementRef } from '@angular/core';
import { NgTreeItemActionCommon } from '@jnetwork/jngcontrols-common';


@Component({
  selector: 'ng-treeitemaction,ngTreeItemAction',
  templateUrl: './ngtreeitemaction.html'
})
export class NgTreeItemActionComponent extends NgTreeItemActionCommon {

  constructor(el: ElementRef) {
    super(el);
  }

}

import { Component, ElementRef } from '@angular/core';
import { NgTreeItemActionCommon } from '@jnetwork/jngcontrols-common';


@Component({
  selector: 'sac-treeitemaction',
  templateUrl: './ngtreeitemaction.html'
})
export class NgTreeItemActionComponent extends NgTreeItemActionCommon {

  constructor(el: ElementRef) {
    super(el);
  }

}

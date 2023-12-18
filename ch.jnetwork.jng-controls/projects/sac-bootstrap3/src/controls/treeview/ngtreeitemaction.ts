import { Component, ElementRef } from '@angular/core';
import { SacTreeItemActionCommon } from '@jnetwork/sac-common';


@Component({
  selector: 'sac-treeitemaction',
  templateUrl: './ngtreeitemaction.html'
})
export class SacTreeItemActionComponent extends SacTreeItemActionCommon {

  constructor(el: ElementRef) {
    super(el);
  }

}

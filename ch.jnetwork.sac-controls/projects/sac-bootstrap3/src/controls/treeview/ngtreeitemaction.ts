import { Component, ElementRef } from '@angular/core';
import { SacTreeItemActionCommon } from '@simpleangularcontrols/sac-common';


@Component({
    selector: 'sac-treeitemaction',
    templateUrl: './ngtreeitemaction.html',
    standalone: true
})
export class SacTreeItemActionComponent extends SacTreeItemActionCommon {

  constructor(el: ElementRef) {
    super(el);
  }

}

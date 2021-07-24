import { Component } from '@angular/core';
import {
  NgContextmenuCommon,
  NgContextmenuItemButtonCommon,
} from '@jnetwork/jngcontrols-common';

/**
 * Component für Menü Eintrag in Context Menü
 */
@Component({
  selector: 'ng-contextmenubutton,ngContextmenuButton',
  templateUrl: './contextmenuitembutton.html',
})
export class NgContextmenuItemButton extends NgContextmenuItemButtonCommon {
  /**
   * Constructor
   * @param contextmenu Instance von Context Menü
   */
  constructor(contextmenu: NgContextmenuCommon) {
    super(contextmenu);
  }
}

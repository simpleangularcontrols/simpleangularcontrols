import { Component } from '@angular/core';
import {
  NgContextmenuCommon,
  NgContextmenuItemButtonCommon,
} from '@jnetwork/sac-common';

/**
 * Component für Menü Eintrag in Context Menü
 */
@Component({
  selector: 'sac-contextmenubutton',
  templateUrl: './contextmenuitembutton.html',
})
export class NgContextmenuItemButtonComponent extends NgContextmenuItemButtonCommon {
  /**
   * Constructor
   * @param contextmenu Instance von Context Menü
   */
  constructor(contextmenu: NgContextmenuCommon) {
    super(contextmenu);
  }
}

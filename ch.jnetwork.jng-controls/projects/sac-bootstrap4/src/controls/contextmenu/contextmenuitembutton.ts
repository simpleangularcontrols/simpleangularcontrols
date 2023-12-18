import { Component } from '@angular/core';
import {
  SacContextmenuCommon,
  SacContextmenuItemButtonCommon,
} from '@jnetwork/sac-common';

/**
 * Component für Menü Eintrag in Context Menü
 */
@Component({
  selector: 'sac-contextmenubutton',
  templateUrl: './contextmenuitembutton.html',
})
export class SacContextmenuItemButtonComponent extends SacContextmenuItemButtonCommon {
  /**
   * Constructor
   * @param contextmenu Instance von Context Menü
   */
  constructor(contextmenu: SacContextmenuCommon) {
    super(contextmenu);
  }
}

import { Component } from '@angular/core';
import {
  SacContextmenuCommon,
  SacContextmenuItemButtonCommon,
} from '@simpleangularcontrols/sac-common';

/**
 * Component für Menü Eintrag in Context Menü
 */
@Component({
  selector: 'sac-multilanguagemenubutton',
  templateUrl: './multilanguagemenuitembutton.html',
})
export class SacMultilanguagemenuItemButtonComponent extends SacContextmenuItemButtonCommon {
  /**
   * Constructor
   * @param contextmenu Instance von Context Menü
   */
  constructor(contextmenu: SacContextmenuCommon) {
    super(contextmenu);
  }
}

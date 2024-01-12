import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  SacContextmenuCommon,
  SacContextmenuItemButtonCommon,
} from '@simpleangularcontrols/sac-common';

/**
 * Component für Menü Eintrag in Context Menü
 */
@Component({
  selector: 'sac-contextmenubutton',
  templateUrl: './contextmenuitembutton.html',
  standalone: true,
  imports: [NgIf],
})
export class SacContextmenuItemButtonComponent extends SacContextmenuItemButtonCommon {
  // #region Constructors

  /**
   * Constructor
   * @param contextmenu Instance von Context Menü
   */
  constructor(contextmenu: SacContextmenuCommon) {
    super(contextmenu);
  }

  // #endregion Constructors
}

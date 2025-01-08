import { Component } from '@angular/core';
import { SacGridButtonCommon } from '@simpleangularcontrols/sac-common';

/**
 * Grid Action Button
 */
@Component({
  selector: 'sac-gridbutton',
  templateUrl: './gridbutton.html',
})
export class SacGridButtonComponent extends SacGridButtonCommon {
  // #region Public Methods

  /**
   * Returns the icon for the button
   */
  public getIconClass(): string {
    let iconset: string = this.iconstyle;
    let iconcss: string = this.icon;

    if (iconset === '') {
      switch (this.icon) {
        case 'edit':
          iconset = 'sprite';
          iconcss = 'icon-sprite-base-main_edit';
          break;
        case 'delete':
          iconset = 'sprite';
          iconcss = 'icon-sprite-base-main_delete';
          break;
      }
    }

    if (this._isdisabledvalue) {
      iconcss += '_disabled';
    }

    const result = iconset + ' ' + iconcss;

    return result.trim();
  }

  // #endregion Public Methods
}

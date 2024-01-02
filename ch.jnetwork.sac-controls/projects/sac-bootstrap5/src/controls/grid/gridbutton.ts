import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { SacGridCommon, SacGridButtonCommon } from '@simpleangularcontrols/sac-common';

/**
 * Grid Action Button
 *
 * @example Standard Action
 *
 * <ngGridButton icon="edit" (clicked)="action('edit')" [isdisabled]="true"></ngGridButton>
 *
 * @example Custom Action
 *
 * <ngGridButton iconstyle="sprite" icon="icon-sprite-base-main_info" (clicked)="action("info")"></ngGridButton>
 *
 */
@Component({
    selector: 'sac-gridbutton',
    templateUrl: './gridbutton.html',
    standalone: true
})
export class SacGridButtonComponent extends SacGridButtonCommon {

  /**
   * Gibt das Icon für den Button zurück
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


}

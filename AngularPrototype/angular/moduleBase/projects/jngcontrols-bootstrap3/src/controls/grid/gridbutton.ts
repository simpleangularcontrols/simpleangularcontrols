import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { NgGridCommon, NgGridButtonCommon } from '@jnetwork/jngcontrols-common';

/**
 * Grid Action Button
 *
 * @example Standard Action
 *
 * <ngGridButton icon="edit" (onclick)="action('edit')" [isdisabled]="true"></ngGridButton>
 *
 * @example Custom Action
 *
 * <ngGridButton iconstyle="sprite" icon="icon-sprite-base-main_info" (onclick)="action('info')"></ngGridButton>
 *
 */
@Component({
  selector: 'ngGridButton',
  templateUrl: './gridbutton.html'
})
export class NgGridButton extends NgGridButtonCommon {

  /**
   * Gibt das Icon für den Button zurück
   */
  public getIconClass(): string {
    let iconset: string = this.iconstyle;
    let iconcss: string = this.icon;

    if (iconset === '') {
      switch (this.icon) {
        case "edit":
          iconset = "sprite";
          iconcss = "icon-sprite-base-main_edit";
        case "delete":
          iconset = "sprite";
          iconcss = "icon-sprite-base-main_delete";
      }
    }

    if (this._isdisabledvalue)
      iconcss += "_disabled";

    let result = iconset + " " + iconcss;

    return result.trim();
  }


}

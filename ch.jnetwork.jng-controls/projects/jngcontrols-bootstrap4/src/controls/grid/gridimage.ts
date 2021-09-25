import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { NgGridCommon, NgGridImageCommon } from '@jnetwork/jngcontrols-common';

/**
 * Image Item für Grid
 */
@Component({
  selector: 'ng-gridimage,ngGridImage',
  templateUrl: './gridimage.html'
})
export class NgGridImageComponent extends NgGridImageCommon {

  /**
   * Gibt die CSS Klassen für Sprite Images zurück
   * @returns CSS Klasse
   */
  public getIconClass(): string {
    switch (this.iconstyle) {
      case 'edit':
        return 'sprite icon-sprite-base-main_edit';
      case 'delete':
        return 'sprite icon-sprite-base-main_delete';
      default:
        return this.iconstyle;
    }
  }


}

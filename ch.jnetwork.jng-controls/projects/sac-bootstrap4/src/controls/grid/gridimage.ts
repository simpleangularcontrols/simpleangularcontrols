import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { SacGridCommon, SacGridImageCommon } from '@jnetwork/sac-common';

/**
 * Image Item für Grid
 */
@Component({
  selector: 'sac-gridimage',
  templateUrl: './gridimage.html'
})
export class SacGridImageComponent extends SacGridImageCommon {

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

import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { NgGridCommon, NgGridImageCommon } from '@jnetwork/jngcontrols-common';


@Component({
  selector: 'ngGridImage',
  templateUrl: './gridimage.html'
})
export class NgGridImage extends NgGridImageCommon {


  public getIconClass(): string {
    switch (this.iconstyle) {
      case "edit":
        return "sprite icon-sprite-base-main_edit";
      case "delete":
        return "sprite icon-sprite-base-main_delete";
      default:
        return this.iconstyle;
    }
  }


}
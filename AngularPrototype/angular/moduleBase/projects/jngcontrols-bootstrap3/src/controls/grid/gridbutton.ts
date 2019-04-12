import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { NgGridCommon, NgGridButtonCommon } from '@jnetwork/jngcontrols-common';


@Component({
  selector: 'ngGridButton',
  templateUrl: './gridbutton.html'
})
export class NgGridButton extends NgGridButtonCommon {


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

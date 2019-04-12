import { NgTooltipCommon } from "@jnetwork/jngcontrols-common";
import { Component, ChangeDetectorRef, ElementRef } from "@angular/core";

@Component({
  selector: 'ngTooltip',
  templateUrl: './tooltip.html',
})
export class NgTooltip extends NgTooltipCommon {

  /**
   * Konstrukor
   * 
   * @param parent NgFormular Instanz
   * @param injector Component Injector
   */
  constructor(cdRef: ChangeDetectorRef, ref: ElementRef) {
    super(cdRef, ref);
  }
}

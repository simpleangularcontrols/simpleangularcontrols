import { Component, Renderer2, ElementRef, OnInit, forwardRef } from '@angular/core';
// import { NgGridColumnCommon } from 'projects/exanic-controls-common/src/public_api';
import { NgGridColumnCommon, NgGridColumnBaseCommon } from '@jnetwork/jngcontrols-common';

@Component({
  selector: 'ngGridColumn,[ngGridColumn]',
  templateUrl: './gridcolumn.html',
  providers: [{ provide: NgGridColumnBaseCommon, useExisting: forwardRef(() => NgGridColumn) }]
})
export class NgGridColumn extends NgGridColumnCommon implements OnInit {

  constructor(public renderer: Renderer2, public hostElement: ElementRef) {
    super();
  }

  ngOnInit() {
    this.renderer.setAttribute(this.hostElement.nativeElement, "title", this.item);
  }
}

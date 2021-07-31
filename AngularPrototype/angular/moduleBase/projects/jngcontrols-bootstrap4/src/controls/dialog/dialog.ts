import {
  Component,
  ElementRef,
  ChangeDetectorRef,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { NgDialogCommon } from "@jnetwork/jngcontrols-common";

@Component({
  selector: "ngDialog",
  templateUrl: "./dialog.html",
})
export class NgDialog extends NgDialogCommon implements OnInit, OnDestroy {
  // DOM Element
  private element: any;

  constructor(el: ElementRef, cdRef: ChangeDetectorRef) {
    super(cdRef);

    this.element = el.nativeElement;
  }

  ngOnInit() {
    // Element an Body für korrektes Styling unter Bootstrap 3 verschieben
    document.body.appendChild(this.element);
  }

  ngOnDestroy() {
    document.body.removeChild(this.element);
    super.ngOnDestroy();
  }
}

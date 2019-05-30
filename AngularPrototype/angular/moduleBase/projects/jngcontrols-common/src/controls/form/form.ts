import { NgForm, NgModel } from '@angular/forms';
import { Input, ViewChild, QueryList, ContentChildren, AfterViewInit, IterableDiffer, IterableDiffers, IterableChanges } from '@angular/core';

export class NgFormularCommon {

  // Form Control
  @Input()
  ngFormular: string;

  // Default Label Size for Form
  @Input("labelsize") labelsize: number = 3;
  // Kontroliert, ob das Label adaptive ist
  @Input("isadaptivelabel") isadaptivelabel: boolean = false;
  // Type des Forms
  @Input("orientation") orientation: string = "horizontal";

  public getOrientation(): string {
    switch (this.orientation.toLowerCase()) {
      case 'horizontal':
        return 'horizontal';
      case 'vertical':
        return 'vertical';
      case 'none':
        return 'none';
      default:
        throw new Error('Invalid formtype at ngFormularCommon. Valid values are horizontal, vertical, none')
    }
  }

  public getForm(): NgForm {
    return this.form;
  }

  constructor(private form: NgForm) {
  }

  public markAsTouched(): void {

    if (this.form && this.form.invalid) {

      Object.keys(this.form.controls).forEach(field => {
        let control = this.form.control.get(field);
        control.markAsTouched({ onlySelf: true });
      })

    }
  }

}

import { NgForm, NgModel } from '@angular/forms';
import { Input, ViewChild, QueryList, ContentChildren, AfterViewInit, IterableDiffer, IterableDiffers, IterableChanges, Component } from '@angular/core';

export class NgFormularCommon implements AfterViewInit {

  // Form Control
  @Input()
  ngFormular: string;

  // Default Label Size for Form
  @Input("labelsize") labelsize: number = 3;
  // Kontroliert, ob das Label adaptive ist
  @Input("isadaptivelabel") isadaptivelabel: boolean = false;
  // Type des Forms
  @Input("orientation") orientation: string = "horizontal";

  // Differable Collection für Change Detection
  private modelList: IterableDiffer<NgModel>;

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
  
  @ViewChild(NgForm)
  public form: NgForm;

  @ContentChildren(NgModel) public models: QueryList<NgModel>;

  constructor(private iterableDiffers: IterableDiffers) {
  }

  ngAfterViewInit(): void {

    // Init Iterable List
    this.modelList = this.iterableDiffers.find([]).create(null);

    // Change Detection für Controls die Nachträglich in Form eingefügt werden -> NgIF Case
    this.models.changes.subscribe(itm => {
      this.synchForm(itm.toArray());
    })

    // Initiales Erstellen des Form Models
    this.synchForm(this.models.toArray());
  }

  private synchForm(models: NgModel[]) {
    if (this.modelList) {
      let listChanges: IterableChanges<NgModel> = this.modelList.diff(models);
      if (listChanges) {

        // Controls in Form hinzufügen, die noch fehlen
        listChanges.forEachAddedItem(itm => {
          this.form.addControl(itm.item);
        });

        // Controls von Form entfernen, die im Content nicht mehr verfügbar sind
        listChanges.forEachRemovedItem(itm => {
          console.log("Remove Item to Form");
          this.form.removeControl(itm.item);
        });
      }
    }
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

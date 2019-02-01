import { Component, IterableDiffers } from '@angular/core';
import { NgFormularCommon } from '@jnetwork/jngcontrols-common';

@Component({
  selector: 'ngFormular',
  templateUrl: './form.html'
})
export class NgFormular extends NgFormularCommon {

  // IterableDiffers via Konstrukor hier injecten damit kein Fehler beim Kompilieren aus der Applikation entsteht
  constructor(iterableDiffers: IterableDiffers) {
    super(iterableDiffers);
  }

}

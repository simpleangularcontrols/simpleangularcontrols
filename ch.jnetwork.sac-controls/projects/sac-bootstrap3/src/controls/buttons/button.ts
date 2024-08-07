import { Component, ViewEncapsulation } from '@angular/core';
import { SacButtonCommon } from '@simpleangularcontrols/sac-common';

@Component({
  selector: 'sac-button',
  templateUrl: './button.html',
  styles: ['sac-button+sac-button {margin-left: 5px}'], // Workaround: Abstand zwischen 2 Buttons setzen, da Boostrap3 nicht mit Host Items umgehen kann
  encapsulation: ViewEncapsulation.None, // Workaround: Abstand zwischen 2 Buttons setzen, da Boostrap3 nicht mit Host Items umgehen kann
})
export class SacButtonComponent extends SacButtonCommon {}

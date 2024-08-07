import { CommonModule, NgClass, NgIf } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { SacButtonCommon } from '@simpleangularcontrols/sac-common';

@Component({
  selector: 'sac-button',
  templateUrl: './button.html',
  standalone: true,
  imports: [NgIf, NgClass, CommonModule],
  styles: ['sac-button+sac-button {margin-left: 5px}', '.spin { animation: spin 1.5s infinite; } @keyframes spin { 0% { transform: rotate(0); } 100% { transform: rotate(360deg); } }'], // Workaround: Abstand zwischen 2 Buttons setzen, da Boostrap3 nicht mit Host Items umgehen kann
  encapsulation: ViewEncapsulation.None, // Workaround: Abstand zwischen 2 Buttons setzen, da Boostrap3 nicht mit Host Items umgehen kann
})
export class SacButtonComponent extends SacButtonCommon {}

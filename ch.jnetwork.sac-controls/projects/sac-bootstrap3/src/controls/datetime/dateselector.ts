import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { SacDateSelectorCommon } from '@simpleangularcontrols/sac-common';

@Component({
  selector: 'sac-dateselector',
  templateUrl: './dateselector.html',
  standalone: true,
  imports: [NgIf, NgFor, NgStyle, NgClass],
})
export class SacDateSelectorComponent extends SacDateSelectorCommon {}

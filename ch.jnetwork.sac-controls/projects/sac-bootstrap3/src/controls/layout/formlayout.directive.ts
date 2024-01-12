import { Directive } from '@angular/core';
import { SacFormLayoutCommon } from '@simpleangularcontrols/sac-common';

@Directive({
  selector: '[sacFormLayout]',
  standalone: true,
})
export class SacFormLayoutDirective extends SacFormLayoutCommon {}

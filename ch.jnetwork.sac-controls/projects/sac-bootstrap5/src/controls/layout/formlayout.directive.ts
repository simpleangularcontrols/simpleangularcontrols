import { Directive } from '@angular/core';
import { SacFormLayoutCommon } from '@simpleangularcontrols/sac-common';

/**
 * Directive that applies form layout settings to descendant controls within a form.
 * Represents the scoped layout configuration for the current form container.
 */
@Directive({
    selector: '[sacFormLayout]',
    standalone: true,
})
export class SacFormLayoutDirective extends SacFormLayoutCommon {}

import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { SacButtonCommon, SacTestingAttributePipe } from '@simpleangularcontrols/sac-common';

/**
 * Button Component
 *
 * <example-url>http://localhost/demo/mysample.component.html</example-url>
 */
@Component({
    selector: 'sac-button',
    templateUrl: './button.html',
    standalone: true,
    imports: [NgIf, NgClass, SacTestingAttributePipe],
})
export class SacButtonComponent extends SacButtonCommon {}

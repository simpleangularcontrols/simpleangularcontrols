import { Component} from '@angular/core';
import { SacButtonCommon } from '@simpleangularcontrols/sac-common';
import { NgIf, NgClass } from '@angular/common';

/**
 * Button Component
 * 
 * <example-url>http://localhost/demo/mysample.component.html</example-url>
 */
@Component({
    selector: 'sac-button',
    templateUrl: './button.html',
    standalone: true,
    imports: [NgIf, NgClass],
})
export class SacButtonComponent extends SacButtonCommon {

}

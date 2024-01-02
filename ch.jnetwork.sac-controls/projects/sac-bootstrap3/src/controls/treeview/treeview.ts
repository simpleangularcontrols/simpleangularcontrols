import { Component } from '@angular/core';
import { SacTreeViewCommon } from '@simpleangularcontrols/sac-common';
import { SacTreeViewChildComponent } from './treeviewchild';
import { NgIf, NgFor, NgClass, NgTemplateOutlet } from '@angular/common';

@Component({
    selector: 'sac-treeview',
    templateUrl: 'treeview.html',
    standalone: true,
    imports: [
        NgIf,
        NgFor,
        NgClass,
        NgTemplateOutlet,
        SacTreeViewChildComponent,
    ],
})

export class SacTreeViewComponent extends SacTreeViewCommon {

}

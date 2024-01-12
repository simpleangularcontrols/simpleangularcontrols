import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { SacTreeViewCommon } from '@simpleangularcontrols/sac-common';
import { SacTreeViewChildComponent } from './treeviewchild';

@Component({
  selector: 'sac-treeview',
  templateUrl: 'treeview.html',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, NgTemplateOutlet, SacTreeViewChildComponent],
})
export class SacTreeViewComponent extends SacTreeViewCommon {}

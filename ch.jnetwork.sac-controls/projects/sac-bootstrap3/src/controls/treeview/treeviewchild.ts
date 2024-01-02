import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { SacTreeViewChildCommon } from '@simpleangularcontrols/sac-common';

@Component({
  selector: 'sac-treeviewchild',
  templateUrl: 'treeviewchild.html',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, NgTemplateOutlet, SacTreeViewChildComponent],
})
export class SacTreeViewChildComponent extends SacTreeViewChildCommon {}

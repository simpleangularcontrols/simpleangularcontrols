import { Directive, OnInit } from '@angular/core';
import { SacTreeViewCommon } from './treeview';

/**
 * Komponente für SacTreeViewChildCommon. Extends SacTreeViewCommon 
 */
@Directive()
export class SacTreeViewChildCommon extends SacTreeViewCommon implements OnInit {
  /**
   * A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive. 
   * Define an ngOnInit() method to handle any additional initialization tasks.
   */
  ngOnInit(){    
    this.collapseAllNode(this.collapseall)
  }
}



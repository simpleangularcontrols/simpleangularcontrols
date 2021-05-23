import { Directive } from '@angular/core';
import { NgTreeViewCommon } from './treeview';

/**
 * Komponente für NgTreeViewChildCommon. Extends NgTreeViewCommon 
 */
@Directive()
export class NgTreeViewChildCommon extends NgTreeViewCommon {
  /**
   * A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive. 
   * Define an ngOnInit() method to handle any additional initialization tasks.
   */
  ngOnInit(){    
    this.collapseAllNode(this.collapseAll)
  }
}



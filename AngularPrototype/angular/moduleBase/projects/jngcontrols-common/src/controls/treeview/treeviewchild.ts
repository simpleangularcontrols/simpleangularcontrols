import { NgTreeViewCommon } from './treeview';


export class NgTreeViewChildCommon extends NgTreeViewCommon {
  ngOnInit(){    
    this.collapseAllNode(this.collapseAll)
  }
}



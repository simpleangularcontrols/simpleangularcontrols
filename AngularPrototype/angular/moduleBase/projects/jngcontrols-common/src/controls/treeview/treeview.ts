import { Component, EventEmitter, Output, Input, OnInit, ChangeDetectorRef, TemplateRef, ContentChild } from '@angular/core';


export class NgTreeViewCommon implements OnInit {

  public _collapseAll: boolean;
  private _selectAll: boolean;
  private _componentInitComplete = false;

  public nodes: any[] = [];
  public collapseAttr = 'isCollapsed';
  public selectAttr = 'isSelected';
  public inDeterminateAttr = 'isIndeterminate';

  // constructor(private cd: ChangeDetectorRef) {
  // }

  


  /**
   * Providen data for tree.
   */
  private _data: any[] = [];

  get data(): any[] {
    return this._data;
  }

  @Input('data')
  set data(value: any[]) {


    this._data = value;
    this.nodes = value;

    // this.nodes.forEach(node => node["typeId"] = "13")    

    this.LoadTree();
    

    if (this._collapseAll !== undefined) {
      this.collapseAllNode(this._collapseAll)
    }

    // if (this._componentInitComplete)
    //   this.LoadTree();
    // else
    //   this.nodes = value;
  }

  @Input("template")
  templateTree: TemplateRef<any>;

  @ContentChild("actions")
  public set treeviewTemplate(v: TemplateRef<any>) {
    this.templateTree = v;
  }

  public get treeviewTemplate(): TemplateRef<any> {
    return this.templateTree;
  }


  @Input('fileicontemplate')
  fileicontemplate: TemplateRef<any>;
  @ContentChild("treefileicon")
  public set treefileicon(v: TemplateRef<any>) {
    this.fileicontemplate = v;
  }

  public get treefileicon(): TemplateRef<any> {
    return this.fileicontemplate
  }

  

  @Input("name")
  _name: string = "";

  

  /**
   * A flag indicating data is flatten in array and prepare is required.(Default
   * is false).
   */
  @Input() prepareData = false;

  /**
   * Attribute for Text in Tree
   */
  @Input() textAttr = 'data';

  /**
   * Name of ID property in input data.
   */
  @Input() idAttr = 'id';

  /**
   * Name of parent property in input data.
   */
  @Input() parentAttr = 'PARENT_ID';

  /**
   * Name of children list property in input data.
   */
  @Input() childrenAttr = 'children';
  @Input("title") _title
  @Input("titleAction") _titleAction: string

  /**
   * Collapse or expand all parent nodes.
   */
  @Input('collapseAll')
  set collapseAll(value: boolean) {


    this._collapseAll = value
    if (this.nodes && this.nodes.length && this.nodes.length > 0) {
      
      this.collapseAllNode(this._collapseAll)
      
    }


    // this._recursiveEdit(
    //   this.nodes, this.childrenAttr, this.collapseAttr, this._collapseAll);

    // this.cd.detectChanges();
  }

  get collapseAll(): boolean {
    return this._collapseAll
  }

  

  /**
   * Select or deselect all nodes.
   */
  @Input('selectAll')
  set selectAll(value: boolean) {
    this._selectAll = value;
    this._recursiveEdit(this.nodes, this.childrenAttr, this.selectAttr, value);
    this._recursiveEdit(
      this.nodes, this.childrenAttr, this.inDeterminateAttr, false);
  }

  @Input("selectedId")
  set selectedId(v: any) {
    this.selectedNode = this.findNode(this.nodes, v, this.idAttr);
    
    // if (this.selectedNode) {
    //   this.selectedIdEmitter.emit(this.selectedNode[this.idAttr]);
    //   this.selectedTextEmitter.emit(this.selectedNode[this.textAttr]);
    // }
  }


  get selectedId(): any {
    return this.selectedNode ? this.selectedNode[this.idAttr] : null;
  }

  private _selectedNode;

  set selectedNode(v: any) {
    this._selectedNode = v;

    if (this._selectedNode) {
      this.selectedIdEmitter.emit(this.selectedId);
      this.selectedTextEmitter.emit(v[this.textAttr]);
    }
  }
  get selectedNode(): any {
    return this._selectedNode;
  }

  @Output("selectedIdChange")
  selectedIdEmitter: EventEmitter<any> = new EventEmitter<any>();


  @Output("selectedTextChanged")
  selectedTextEmitter: EventEmitter<string> = new EventEmitter<string>();

  @Output("onselecteditem")
  selectedItemEmitter: EventEmitter<string> = new EventEmitter<string>();



  ngOnInit() {

    this.collapseAllNode(this._collapseAll)

    if (this.selectedId)
      this.openSelectedNode(this.nodes);
  }

  /**
   * Funktion setzta alle alle parent items rcusiv zum selected node
   * auf collapsed = false
   */
  private openSelectedNode(data): boolean {
    let result: boolean = false;
    for (let i = 0; i < data.length; i++) {
      if (data[i][this.childrenAttr].length && data[i][this.idAttr] != this.selectedId)
        result = this.openSelectedNode(data[i][this.childrenAttr]);
      if (result || data[i][this.idAttr] == this.selectedId) {
        data[i][this.collapseAttr] = false;
        return true;
      }
    }
    return false;
  }

  private LoadTree() {
    
    //if the tree structure require array the function below should be changed
    const cloned = this._data.map(x => Object.assign({}, x));

    // If data is flat, prepare data with recursive function.
    this.nodes = this.prepareData ? this._getPreparedData(cloned) : this._data;
  }

  onCollapseClick(node) {
    if (node[this.childrenAttr].length) {
      node[this.collapseAttr] = !node[this.collapseAttr];
    }
  }

  onClick(node) {
    
    this.selectedNode = node;
    this.selectedItemEmitter.emit(this.selectedNode)
    // this.cd.detectChanges();
       
  }

  sendMsgToParent(msg){
    this.selectedItemEmitter.emit(msg)
  }

  

  collapseAllNode(command) {
    this.nodes.forEach(node => {
      if (node[this.childrenAttr].length) {
        collapseAllHIdden(node, this.collapseAttr, command, this.childrenAttr)
      }
    }
    )
    function collapseAllHIdden(node, collapseAttr, command, childrenAttr) {


      node[collapseAttr] = command;
      node.children.forEach((child: any) => {
        if (child[childrenAttr].length) {
          collapseAllHIdden(child, collapseAttr, command, childrenAttr);
        }
      });


    }
  }




  /**
   * Funktion gibt node aus der liste zurück, welches das Value auf dem gewünschten Attribut hat
   * Wenn node nicht gefunden wird, wird null zurück gegeben
   * @param data Liste der nodes
   * @param searchValue Das gesuchte value
   * @param attr Der namen des Attributs auf dem das value gesucht wird
   */
  private findNode(data, searchValue, attr): any {
    let result: any = null;
    for (let i = 0; i < data.length; i++) {
      if (data[i][attr] == searchValue)
        result = data[i];
      else {
        if (data[i][this.childrenAttr].length) {
          let recursiveResult = this.findNode(data[i][this.childrenAttr], searchValue, attr);
          if (recursiveResult)
            result = recursiveResult;
        }
      }
    }
    return result;
  }

  private _recursiveEdit(list, childrenAttr, attr, value) {
    if (Array.isArray(list)) {
      for (let i = 0, len = list.length; i < len; i++) {
        list[i][attr] = value;
        if (list[i][childrenAttr].length) {
          this._recursiveEdit(list[i][childrenAttr], childrenAttr, attr, value);
        }
      }
    }
  }

  private _getPreparedData(list) {
    

    const tree = [], lookup = {};
    for (let i = 0, len = list.length; i < len; i++) {
      
      lookup[list[i][this.idAttr]] = list[i];
      list[i][this.childrenAttr] = [];
      list[i][this.collapseAttr] = true;
      list[i][this.selectAttr] = false;
      list[i][this.inDeterminateAttr] = false;
    }
    for (let i = 0, len = list.length; i < len; i++) {
      if (list[i][this.parentAttr]) {
        
        lookup[list[i][this.parentAttr]][this.childrenAttr].push(list[i]);
        
      } else {
        tree.push(list[i]);
      }
    }
    
    return tree;
  }
}

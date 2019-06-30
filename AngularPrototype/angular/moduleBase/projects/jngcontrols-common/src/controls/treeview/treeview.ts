import { Component, EventEmitter, Output, Input, OnInit, ChangeDetectorRef, TemplateRef, ContentChild } from '@angular/core';


export class NgTreeViewCommon implements OnInit {

  /**
   * Das Property enthielt boolean Wert und deffiniert, ob alle Items collapsed sind. Default value: undefined/null
   */
  public _collapseAll: boolean;

  /**
   * Das Property enthielt boolean Wert und deffiniert, ob alle Items selected sind. Default value: undefined/null
   */
  private _selectAll: boolean;

  /**
   * Das Property enthielt array of nodes. Default value: empty array [].
   */
  public nodes: any[] = [];

  /**
   * Das Property enthielt node attribute: 'isCollapsed'. Es wird benutzt beim rendering. Für Expand/Collapsed Sicht des Node(Wert)
   */
  public collapseAttr = 'isCollapsed';

  /**
   * Das Property enthielt node attribute: 'isSelected'. Es wird benutzt beim Vorbereitung des Data des TreeView
   */
  public selectAttr = 'isSelected';

  /**
  * Das Property enthielt node attribute: 'isIndeterminate'. Es wird benutzt beim Vorbereitung des Data des TreeView
  */
  public inDeterminateAttr = 'isIndeterminate';





  /**
   * Providen data for tree.
   */
  private _data: any[] = [];

  /**
   * Getter für Data des TreeView
   */
  get data(): any[] {
    return this._data;
  }

  /**
   * Input Property für Data des TreeView
   */
  @Input('data')
  set data(value: any[]) {


    this._data = value;
    this.nodes = value;

    // this.nodes.forEach(node => node["typeId"] = "13")    

    this.LoadTree();


    if (this._collapseAll !== undefined) {
      this.collapseAllNode(this._collapseAll)
    }

  }

  /**
   * Input Property für template des TreeView. Type: TemplateRef<any>.
   */
  @Input("template")
  templateTree: TemplateRef<any>;


  /**
   * Die Directive erhält die actions für das TreeView
   */
  @ContentChild("actions")
  public set treeviewTemplate(v: TemplateRef<any>) {
    this.templateTree = v;
  }

  /**
   * Getter für das TreeView Template
   */
  public get treeviewTemplate(): TemplateRef<any> {
    return this.templateTree;
  }


  /**
   * Input property erhält Icon für das Template
   */
  @Input('fileicontemplate')
  fileicontemplate: TemplateRef<any>;

  /**
   * Setter property. Deffiniert das FileIcon für das TreeView
   */
  @ContentChild("treefileicon")
  public set treefileicon(v: TemplateRef<any>) {
    this.fileicontemplate = v;
  }

  /**
   * Getter property. Ergibt das FileIcon für das TreeView
   */
  public get treefileicon(): TemplateRef<any> {
    return this.fileicontemplate
  }


  /**
   * Input property für den Namen des TreeView. Type string. Default value: ""
   */
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

  /**
   * Title des Treeview
   */
  @Input("title") _title;

  // @Input("titleAction") _titleAction: string

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

  /**
   * Getter für das collapse property. Ergibt boolean Wert, ob die Items collapsed/expand sind.
   */
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

  /**
   * Input property - setter. Deffiniert das ID des selektierten Item(node)
   */
  @Input("selectedId")
  set selectedId(v: any) {
    this.selectedNode = this.findNode(this.nodes, v, this.idAttr);

    // if (this.selectedNode) {
    //   this.selectedIdEmitter.emit(this.selectedNode[this.idAttr]);
    //   this.selectedTextEmitter.emit(this.selectedNode[this.textAttr]);
    // }
  }

  /**
   * Getter. Ergibt das ID des selektierten Item(node)
   */
  get selectedId(): any {
    return this.selectedNode ? this.selectedNode[this.idAttr] : null;
  }

  /**
   * Das Property erhält das selektierte Wert(node). Default value: undefined/null
   */
  private _selectedNode;

  /**
   * Setter für das selektierte Wert(node). Wenn aufgerufen das ID und TextAttr des selected Node wird emitted
   */
  set selectedNode(v: any) {
    this._selectedNode = v;

    if (this._selectedNode) {
      this.selectedIdEmitter.emit(this.selectedId);
      this.selectedTextEmitter.emit(v[this.textAttr]);
    }
  }

  /**
   * Getter für das selektierte Wert(node). Ergibt das selektierte Wert(node).
   */
  get selectedNode(): any {
    return this._selectedNode;
  }

  /**
   * Output Emitter. Emit das ID des selected Node.
   */
  @Output("selectedIdChange")
  selectedIdEmitter: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Output Emitter. Emit das TextAttr des selected Node.
   */
  @Output("selectedTextChanged")
  selectedTextEmitter: EventEmitter<string> = new EventEmitter<string>();

  /**
   * Output Emitter. Emit wenn ein Node selektiert wird. 
   */
  @Output("onselecteditem")
  selectedItemEmitter: EventEmitter<string> = new EventEmitter<string>();



  ngOnInit() {

    this.collapseAllNode(this._collapseAll)

    if (this.selectedId)
      this.openSelectedNode(this.nodes);
  }

  /**
   * Funktion setzt alle parent items recusiv zum selected node
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

  /**
   * Die Methode vorbereitet die Daten für das TreeView. Die Funktion sollte geändert werden abhängig von dem kommenden Daten (wenn array)
   */
  private LoadTree() {

    //if the tree structure require array the function below should be changed
    const cloned = this._data.map(x => Object.assign({}, x));

    // If data is flat, prepare data with recursive function.
    this.nodes = this.prepareData ? this._getPreparedData(cloned) : this._data;
  }

  /**
   * Die Methode collapse/expand den selectierten Node
   */
  onCollapseClick(node) {
    if (node[this.childrenAttr].length) {
      node[this.collapseAttr] = !node[this.collapseAttr];
    }
  }

  /**
   * Die Methode set den selektierten Node und emit es. 
   */
  onClick(node) {

    this.selectedNode = node;
    this.selectedItemEmitter.emit(this.selectedNode)
    // this.cd.detectChanges();

  }

  /**
   * Die Methode wird ein event mit Meldung zu Parent emit-en.
   */
  sendMsgToParent(msg) {
    this.selectedItemEmitter.emit(msg)
  }



  /**
   * Die Methode wird alle Nodes collapse
   */
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


  /**
   * Die Methode editiert (recursive) alle eingegebene Nodes abhängig von gegebenen Attibute und Value Kriterien. 
   */
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

  /**
   * Die Methode erstellt eine standarte Sicht-Liste von Nodes
   */
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

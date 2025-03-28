import { SacBaseModelControl } from '../../common/basemodelcontrol';
import { TreeviewAction } from '../../interfaces/treeviewaction.interface';
import { Validation } from '../../validation';
import { SacFormLayoutCommon } from '../layout/formlayout';
import { Directive, EventEmitter, Host, Injector, Input, Output, TemplateRef } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

/**
 * Basis Komponente für SacTreeView
 */
@Directive()
export class SacTreeviewCommon extends SacBaseModelControl<any> {
    // #region Properties

    /**
     * Event when Action is clicked on Node.  An object of the type 'TreeviewAction' is returned. In the default case, 'action' in this object is always the value 'default'. The value can be changed via the 'templateaction'.
     */
    @Output()
    public actionclicked: EventEmitter<TreeviewAction> = new EventEmitter<TreeviewAction>();

    /**
     * Property on the data object that contains the children of the structure element. Must be an array of objects. The default value is 'children'
     */
    @Input()
    public attrchildren = 'children';

    /**
     * Defines the property on the 'data' object with which the actions for a node can be deactivated. A 'disabled' property is used by default.
     */
    @Input() public attrdisableaction = 'disabled';

    /**
     * Property on the 'data' object that stores the expanded state. Property must be of type boolean. Default is 'expanded'
     */
    @Input()
    public attrexanded = 'expanded';

    /**
     * Property for saving the HoverState on the field. If the property is not present on the node, it is automatically created and removed again. The value can usually be left at the default value unless there is a conflict with a property on the node that is required for other purposes.
     */
    @Input()
    public attrhoverstate = 'hoverstate';

    /**
     * Property on 'data' object, which contains the icon for the node. By default, the property is not set, which hides the icon in the node.
     */
    @Input()
    public attricon: string | null = null;

    /**
     * property on the 'data' object contains an ID of the node. The default is 'id'. If the property is set to NULL, the selectedId event is no longer triggered.
     */
    @Input()
    public attrid: string | null = 'id';

    /**
     * Property on 'data' object, which contains the label for the node. Default is 'label'
     */
    @Input()
    public attrlabel = 'label';

    /**
     * Property on 'data' object, which defines whether the node is selected or not. It should be ensured that only 1 node has the value for Selected set to true. Default is 'selected'.
     */
    @Input()
    public attrselected = 'selected';

    /**
     * Event when a node is collapsed. Returns the node element as a parameter
     */
    @Output()
    public collabsed: EventEmitter<any> = new EventEmitter<any>();

    /**
     * The property contains an array of nodes. The data must already map the tree via child properties.
     */
    @Input()
    public data: any[] = [];

    /**
     * Activates the 'expand' and 'collabse' event even if a node has no children. This is helpful if node elements are to be reloaded at runtime.
     */
    @Input()
    public enableasynchload: boolean | string = false;

    /**
     * Activates Ellipsis on the node labels
     */
    @Input()
    public enableellipsis = true;

    /**
     * Event when a node is expanded. Returns the node element as a parameter
     */
    @Output()
    public expanded: EventEmitter<any> = new EventEmitter<any>();

    /**
     * Defines whether an icon for the expanded/collapsed status should be displayed.
     */
    @Input()
    public expandedstate: boolean | string = true;

    /**
     * A node must be selected
     */
    @Input()
    public isrequired: boolean = false;

    /**
     * Name of the TreeView control
     */
    @Input()
    public name: string = '';

    /**
     * Event when a node is selected. Returns the id attribute as a parameter. The event is not triggered if 'attrid' is not set.
     */
    @Output()
    public selected: EventEmitter<any> = new EventEmitter<any>();

    /**
     * Event when a node is selected. Returns the node element as a parameter.
     */
    @Output()
    public selectednode: EventEmitter<any> = new EventEmitter<any>();

    /**
     * Defines that the action template is displayed independently of the selected state. If the value is 'true', the action template is displayed for every element.
     */
    @Input()
    public showactionalways;

    /**
     * Custom template for actions per node. Template parameters are: 'node'
     */
    @Input()
    public templateaction: TemplateRef<any>;

    /**
     * Custom template for icon per node. Template parameters are: 'node'
     */
    @Input()
    public templateicon: TemplateRef<any>;

    /**
     * Custom template for the label area per node. Template parameters are: 'node' and 'label'
     */
    @Input()
    public templatelabel: TemplateRef<any>;

    /**
     * Resource Key für Validation Message Required bei Control
     */
    @Input() public validationmessagerequired: string = this.validationKeyService.ValidationErrorRequired;

    /**
     * Resource Key für Validation Message Required in Validation Summary
     */
    @Input()
    public validationmessagesummaryrequired: string = this.validationKeyService.ValidationErrorSummaryRequired;

    // #endregion Properties

    // #region Constructors

    /**
     * Constructor
     * @param injector Service Injector
     */
    constructor(@Host() formlayout: SacFormLayoutCommon, injector: Injector) {
        super(formlayout, injector);
    }

    // #endregion Constructors

    // #region Public Getters And Setters

    public get iconAction(): string {
        return this.iconService.TreeviewNodeActionIcon;
    }

    /**
     * CSS icon for folders in tree there are collabsed
     * @returns css class with icon
     */
    public get iconFolderCollabsed(): string {
        return this.iconService.TreeviewNodeClosedIcon;
    }

    /**
     * CSS icon class for folders without subfolders
     * @returns css class with icon
     */
    public get iconFolderEmpty(): string {
        return this.iconService.TreeviewNodeEmptyIcon;
    }

    /**
     * CSS icon for folders in tree there are expanded
     * @returns css class with icon
     */
    public get iconFolderOpen(): string {
        return this.iconService.TreeviewNodeOpenIcon;
    }

    // #endregion Public Getters And Setters

    // #region Public Methods

    /**
     * Creates an array of a certain size. Is required for a For in the UI, as Angular does not support counting loops
     * @param size Size of the array
     * @returns Array
     */
    public count(size: number): Array<void> {
        return new Array(size);
    }

    public getChildren(node: any): any[] {
        if (!node || !this.attrchildren) {
            return [];
        }

        let children = node[this.attrchildren];

        if (!Array.isArray(children)) {
            return [];
        }

        return children;
    }

    public getStringField(node: any, fieldname: string): any {
        if (!node) {
            return '';
        }

        if (!fieldname) {
            return node;
        }

        let value = node[fieldname];

        if (!value) {
            return '';
        }

        return value;
    }

    public hasChildren(node: any): boolean {
        return this.getChildren(node).length > 0;
    }

    public isDisabledState(node: any): boolean {
        if (!node || !this.attrdisableaction) {
            return false;
        }

        let value = node[this.attrdisableaction];
        return value === true || value === 'true';
    }

    public isExpandedState(node: any): boolean {
        if (!node || !this.attrexanded) {
            return false;
        }

        let value = node[this.attrexanded];
        return value === true || value === 'true';
    }

    public isHoverState(node: any): boolean {
        if (!node || !this.attrhoverstate) {
            return false;
        }

        let value = node[this.attrhoverstate];
        return value === true || value === 'true';
    }

    public isSelectedState(node: any): boolean {
        if (!node || !this.attrselected) {
            return false;
        }

        let value = node[this.attrselected];
        return value === true || value === 'true';
    }

    /**
     * Method is called by clicking an action
     * @param action action and node
     */
    public onActionClicked(action: TreeviewAction) {
        this.actionclicked.emit(action);
    }

    /**
     * Method is called when Node in Tree is clicked
     * @param node Selected Node
     */
    public onNodeClicked(node: any): void {
        if (this.isDisabledState(node) || this.isSelectedState(node)) {
            this.invertExpandedState(node);
        }

        this.setSelectedState(node);
    }

    /**
     * Sets the hover state on a node
     * @param node Node on which the status is set
     * @param state Activate or deactivate HoverState
     */
    public setHoverState(node: any, state: boolean) {
        if (!node || !this.attrhoverstate) {
            return;
        }

        if (state) {
            node[this.attrhoverstate] = true;
            return;
        }

        if (!node.hasOwnProperty(this.attrhoverstate)) {
            return;
        }

        delete node[this.attrhoverstate];
    }

    /**
     * Sets the selected state on a node
     * @param node Node which is marked as Selected
     */
    public setSelectedState(node: any): void {
        if (!node || !this.attrselected) {
            return;
        }

        // reset selected state of any node
        this.data.forEach((rootNode) => this.resetSelectedState(rootNode));

        // set selected node as selected
        node[this.attrselected] = true;

        // Extract ID from Node
        const idValue = node[this.attrid];

        // Update ngModel
        this.setValue(idValue);

        // Raise Selected Events
        this.selectednode.emit(node);

        if (!this.attrid) {
            return;
        }

        let id = this.getStringField(node, this.attrid);
        this.selected.emit(id);
    }

    /**
     * Validates the model state of the control
     * @param c Control instance
     * @returns Returns a validation error, if present. Otherwise, as Result is NULL
     */
    public validateData(c: AbstractControl): ValidationErrors | null {
        let error: ValidationErrors | null = null;

        if (this.isrequired) {
            error = Validation.required(this.validationmessagerequired, this.validationmessagesummaryrequired)(c);
        }

        return error;
    }

    /**
     * Saves the data from the model binding
     * @param value Id of the selected node
     */
    public writeValue(value: any): void {
        super.writeValue(value);

        // Do not preselct item when tree is empty
        if (!this.data) {
            return;
        }

        this.data.forEach((root) => {
            const result = this.findNodeById(root, value);

            if (result !== null) {
                this.setSelectedState(result);
            }
        });
    }

    // #endregion Public Methods

    // #region Private Methods

    /**
     * Searches for a node based on the value in the ID attribute
     * @param node Node
     * @param value Value of the Id attribute
     * @returns Returns the node if it is found. If not, NULL is returned.
     */
    private findNodeById(node: any, value: any): any {
        if (!this.attrid || !node) {
            return null;
        }

        if (node[this.attrid] === value) {
            return node;
        }

        const children = this.getChildren(node);
        for (let child of children) {
            const result = this.findNodeById(child, value);
            if (result !== null) {
                return result;
            }
        }

        return null;
    }

    private invertExpandedState(node: any) {
        if (!node || !this.attrexanded) {
            return;
        }

        // Items with no children cannot be collabsed
        if (!this.hasChildren(node) && !(this.enableasynchload === true || this.enableasynchload === 'true')) {
            return;
        }

        let value = node[this.attrexanded];

        if (value === true || value === 'true') {
            this.collabsed.emit(node);
            node[this.attrexanded] = false;
        } else {
            this.expanded.emit(node);
            node[this.attrexanded] = true;
        }
    }

    private resetSelectedState(node: any) {
        if (!node || !this.attrselected) {
            return;
        }

        node[this.attrselected] = false;

        this.getChildren(node).forEach((child) => {
            this.resetSelectedState(child);
        });
    }

    // #endregion Private Methods
}

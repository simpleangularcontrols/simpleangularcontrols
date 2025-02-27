# Extensions

## Custom Actions

It is possible to store your own actions on the nodes. The template 'templateaction' must be provided for this purpose. The template provides 2 properties ('node' and 'actionhandler'). 'node' corresponds to the node in the tree. 'actionhandler' is a function to trigger the 'actionclicked' event on the treeview component. It is important that an object of the type 'TreeviewAction' is given as a parameter.

```html
<ng-template #templateaction let-node="node" let-actionhandler="actionhandler">
    <a class="btn btn-sm btn-link text-secondary" (click)="actionhandler({ action: 'edit', node: node })">
        <i class="fa fa-edit"></i>
    </a>
    <sac-contextmenu style="display: inline-block">
        <sac-contextmenubutton
            text="Ordner erstellen"
            icon="fa fa-new"
            (clicked)="actionhandler({ action: 'add', node: node })"
        >
        </sac-contextmenubutton>
        <sac-contextmenubutton
            text="Ordner löschen"
            icon="fa fa-trash"
            (clicked)="actionhandler({ action: 'delete', node: node })"
        >
        </sac-contextmenubutton>
        <sac-contextmenusplitter></sac-contextmenusplitter>
        <sac-contextmenubutton
            text="Aktualisieren"
            icon="fa fa-refresh"
            (clicked)="actionhandler({ action: 'refresh', node: node })"
        >
        </sac-contextmenubutton>
    </sac-contextmenu>
</ng-template>
```

Important: If you use the context menu in combination with a button, you must set the style 'display: inline-block' on the context menu so that the context menu and button are displayed on one line! Boostrap 3 does not provide a class to align the elements accordingly.

## Load nodes dynamically

It is possible to dynamically reload nodes when the parent node is expanded. To do this, the 'exanded' event of the treeview must be processed. The child elements of the node can then be dynamically reloaded and added accordingly. It is important that the array is rewritten, otherwise the ChangeDetection will not work.

In addition, the 'enableasynchload' property must be set to true, as otherwise the 'expanded' event will not be triggered if a node has no child elements.

```html
<sac-treeview [data]="data1" [enableasynchload]="true" attricon="icon" (expanded)="appendNode($event)"> </sac-treeview>
```

```ts
public appendNode(node: any) {
    node.children.push({
        id: 9,
        label: 'My Custom Item',
        icon: '',
        expanded: false,
        disabled: false,
        children: [],
    });

    // Important for change detection
    node.chilren = [...node.children];
}
```

# Examples

Example of a tree.

Tree object with all nodes

```ts
public tree = [
    {
        id: 1,
        label: 'Root',
        icon: 'fa fa-star',
        expanded: true,
        children: [
            {
                id: 2,
                label: 'Sub Item 1',
                icon: '',
                expanded: false,
                children: [],
            },
            {
                id: 3,
                label: 'Sub Item 2',
                icon: '',
                disabled: true,
                children: [
                    {
                        id: 6,
                        label: 'Sub Item 2 - Child 1 - With a very long description text which should be truncated',
                        icon: '',
                        expanded: false,
                        children: [],
                    },
                ],
            },
            {
                id: 4,
                label: 'Sub Item 3',
                icon: '',
                expanded: true,
                children: [
                    {
                        id: 5,
                        label: 'Sub Item 3 - Child 1',
                        icon: '',
                        expanded: false,
                        children: [],
                    },
                ],
            },
        ],
    },
];
```

Use of the treeview in the markup

```html
<sac-treeview
    [data]="tree"
    attrchildren="children"
    attrexanded="expanded"
    attrid="id"
    attricon="icon"
    attrlabel="label"
    attrselected="selected"
    (selected)="onSelected($event)"
    (selectednode)="onSelectedNode($event)"
>
</sac-treeview>
```

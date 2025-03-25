import { Component, ViewChild } from '@angular/core';
import { SacFormDirective } from '@simpleangularcontrols/sac-bootstrap4';
import { TreeviewAction } from '@simpleangularcontrols/sac-common';

@Component({
    selector: 'app-treeview',
    templateUrl: './treeview.component.html',
})
export class DemoTreeviewComponent {
    // #region Properties

    public data1 = [
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
    public data2 = [
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
    @ViewChild('myForm')
    public myForm: SacFormDirective;
    public public;
    public selectedNode: any | null = null;
    public selectedNode2: any | null = 4;

    // #endregion Properties

    // #region Public Methods

    public appendNode(node: any) {
        node.children.push({
            id: 9,
            label: 'Dyn Item ' + Date.now(),
            icon: '',
            expanded: false,
            disabled: true,
            children: [],
        });

        node.chilren = [...node.children];

        console.log('node added');
    }

    public debugAction(data: TreeviewAction): void {
        alert(data.action + ' - ' + data.node.label);
    }

    public onCollabse(node: any) {
        console.log('Collabse: ' + node.label);
    }

    public onExpand(node: any) {
        console.log('Expand: ' + node.label);
    }

    public onSelectNewId(): void {
        this.selectedNode2 = 2;
    }

    public onSelected(id: number) {
        console.log('Select Id: ' + id);
    }

    public onSelectedNode(node: any) {
        console.log('Select Node: ' + node.label);
    }

    public validateForm(): void {
        this.myForm.markAsTouched();
    }

    // #endregion Public Methods
}

import { JsonPipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    SACBootstrap5ButtonModule,
    SACBootstrap5DropdownModule,
    SACBootstrap5FormModule,
    SACBootstrap5ListModule,
    SACBootstrap5ValidationSummaryModule,
    SacFormDirective,
} from '@simpleangularcontrols/sac-bootstrap5';

// #region Interfaces

interface KeyValue {
    // #region Properties

    label: string;
    text: string;
    value: string;

    // #endregion Properties
}

interface KeyValue2 extends KeyValue {
    // #region Properties

    enabled: boolean;

    // #endregion Properties
}

interface KeyValue3 extends KeyValue2 {
    // #region Properties

    checked: boolean;

    // #endregion Properties
}

interface KeyValueNumeric {
    // #region Properties

    label: string;
    text: string;
    value: number;

    // #endregion Properties
}

// #endregion Interfaces

// #region Exported Classes

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    standalone: true,
    imports: [
        FormsModule,
        SACBootstrap5FormModule,
        SACBootstrap5ButtonModule,
        SACBootstrap5ValidationSummaryModule,
        SACBootstrap5DropdownModule,
        SACBootstrap5ListModule,
        JsonPipe,
    ],
})
export class DemoListComponent {
    // #region Properties

    @ViewChild('myForm') public myForm: SacFormDirective;
    public values: any = {
        dropdown1: null,
        dropdown2: 'v1',
        dropdown3: 'v3',
        dropdown4: 'v3',
        dropdown5: 'v3',
        dropdown6: 'v2',
        dropdown7: '',
        dropdown8: null,
        dropdown9: null,
        dropdown10: 'v1',
        dropdown11: 'v1',
        dropdown12: 2,
        dropdown13: null,
        dropdown14: 0,
        dropdown15: 'notset',
        listbox1: null,
        listbox2: ['v2', 'v3'],
        listbox3: null,
        listbox4: ['v2', 'v3'],
        listbox5: null,
        listbox6: [1, 3],
        dropdownitems: [
            { label: 'Wert 1', value: 'v1', text: 'Text 1' },
            { label: 'Wert 2', value: 'v2', text: 'Text 2' },
            { label: 'Wert 3', value: 'v3', text: 'Text 3' },
        ],
        dropdownitems2: [
            { label: 'Wert 1', value: 'v1', text: 'Text 1', enabled: true },
            { label: 'Wert 2', value: 'v2', text: 'Text 2', enabled: false },
            { label: 'Wert 3', value: 'v3', text: 'Text 3', enabled: true },
        ],
        dropdownitems3: [
            { label: 'Wert 1', value: 1, text: 'Text 1' },
            { label: 'Wert 2', value: 2, text: 'Text 2' },
            { label: 'Wert 3', value: 3, text: 'Text 3' },
        ],
        groupitems: [
            {
                label: 'Group 1',
                items: [
                    { label: 'Wert 1', value: 'v1', text: 'Text 1' },
                    { label: 'Wert 2', value: 'v2', text: 'Text 2' },
                ],
            },
            {
                label: 'Group 2',
                items: [{ label: 'Wert 3', value: 'v3', text: 'Text 3' }],
            },
        ],
    };

    // #endregion Properties

    // #region Public Methods

    public debugAction(): void {
        this.myForm.markAsTouched();
        alert('Action');
    }

    // #endregion Public Methods
}

// #endregion Exported Classes

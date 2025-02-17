import { Component, ViewChild } from '@angular/core';
import { SacFormDirective, SACBootstrap3FormModule, SACBootstrap3ButtonModule, SACBootstrap3ValidationSummaryModule, SACBootstrap3ListModule } from '@simpleangularcontrols/sac-bootstrap3';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface KeyValue {
  label: string;
  text: string;
  value: string;
}

interface KeyValue2 extends KeyValue {
  enabled: boolean;
}

interface KeyValue3 extends KeyValue2 {
  checked: boolean;
}

interface KeyValueNumeric {
  label: string;
  text: string;
  value: number;
}

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    standalone: true,
    imports: [
        FormsModule,
        SACBootstrap3FormModule,
        SACBootstrap3ButtonModule,
        SACBootstrap3ValidationSummaryModule,
        SACBootstrap3ListModule,
        JsonPipe,
    ],
})
export class DemoListComponent {
  @ViewChild('myForm') myForm: SacFormDirective;
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

  public debugAction(): void {
    this.myForm.markAsTouched();
    alert('Action');
  }
}

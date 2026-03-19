import { Component, ViewChild } from '@angular/core';
import { SacFormDirective } from '@simpleangularcontrols/sac-bootstrap4';

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
    selector: 'app-uploader',
    templateUrl: './uploader.component.html',
})
export class DemoUploaderComponent {
    // #region Properties

    @ViewChild('myForm') public myForm: SacFormDirective;
    public values: any = {
        fieldupload1: null,
        fieldupload2: null,
        fieldupload3: null,
        fieldupload4: null,
        fieldupload5: null,
        fieldupload6: null,
        fieldupload7: null,
        fieldupload8: null,
        fieldupload9: null,
        fieldmultipleupload1: null,
        fieldmultipleupload2: null,
        fieldmultipleupload3: null,
        fieldmultipleupload4: null,
        fieldmultipleupload5: null,
        fieldmultipleupload6: null,
        dropzone1: null,
        dropzone2: null,
        dropzone3: null,
        dropzone4: null,
        dropzone5: null,
        dropzone6: null,
        dropzone7: null,
    };

    // #endregion Properties

    // #region Public Methods

    /**
     * Marks all fields in the demo form as touched.
     */
    public debugAction(): void {
        this.myForm.markAsTouched();
        alert('Action');
    }

    /**
     * Displays the given message as dialog.
     * @param message Message text to display.
     */
    public showmessage(message: string): void {
        alert(message);
    }

    // #endregion Public Methods
}

// #endregion Exported Classes

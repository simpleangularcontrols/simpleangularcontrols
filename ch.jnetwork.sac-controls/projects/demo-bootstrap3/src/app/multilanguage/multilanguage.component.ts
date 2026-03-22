import { Component, ViewChild } from '@angular/core';
import { SacFormDirective } from '@simpleangularcontrols/sac-bootstrap3';

// #region Exported Classes

@Component({
    selector: 'app-multilanguage',
    templateUrl: './multilanguage.component.html',
})
export class DemoMultilanguageComponent {
    // #region Properties

    @ViewChild('myForm') public myForm: SacFormDirective;
    public values: any = {
        Model1: new MultiLanguageDataModel(),
        Model2: new MultiLanguageDataModel(),
        Model3: new MultiLanguageDataModel(),
        Model4: { de: 'Wert Deutsch', en: 'Wert Englisch' },
        Model5: { de: 'Wert Deutsch', en: 'Wert Englisch' },
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

    // #endregion Public Methods
}

export class MultiLanguageDataModel {
    // #region Properties

    public de: string = '';
    public en: string = '';

    // #endregion Properties
}

// #endregion Exported Classes

import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    SACBootstrap4ButtonModule,
    SACBootstrap4FormModule,
    SACBootstrap4MultilanguageModule,
    SACBootstrap4ValidationSummaryModule,
    SacFormDirective,
} from '@simpleangularcontrols/sac-bootstrap4';

// #region Exported Classes

@Component({
    selector: 'app-multilanguage',
    templateUrl: './multilanguage.component.html',
    standalone: true,
    imports: [
        FormsModule,
        SACBootstrap4FormModule,
        SACBootstrap4ButtonModule,
        SACBootstrap4ValidationSummaryModule,
        SACBootstrap4MultilanguageModule,
    ],
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

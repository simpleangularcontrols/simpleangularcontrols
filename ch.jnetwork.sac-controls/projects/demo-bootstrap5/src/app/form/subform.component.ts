import { Component, DoCheck, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    SACBootstrap5FormModule,
    SACBootstrap5InputModule,
    SACBootstrap5LayoutModule,
    SacInheritFormDirective,
} from '@simpleangularcontrols/sac-bootstrap5';

@Component({
    selector: 'app-subform',
    templateUrl: './subform.component.html',
    standalone: true,
    imports: [SACBootstrap5FormModule, SACBootstrap5InputModule, SACBootstrap5LayoutModule, FormsModule],
})
export class DemoSubFormComponent implements DoCheck {
    // #region Properties

    @ViewChild('formaccess') public form: SacInheritFormDirective;
    @Input() public mymodel;
    @Output() public mymodelChange = new EventEmitter();

    // #endregion Properties

    // #region Public Methods

    /**
     * Synchronizes model changes and logs the nested form state during change detection.
     */
    public ngDoCheck() {
        if (this.form) {
            console.log(this.form.getForm().dirty);
        }
        this.mymodelChange.next(this.mymodel);
    }

    // #endregion Public Methods
}

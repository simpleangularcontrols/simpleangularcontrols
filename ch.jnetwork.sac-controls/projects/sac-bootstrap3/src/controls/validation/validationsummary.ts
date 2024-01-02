import { Component, Host, Injector, Optional } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer } from '@angular/forms';
// import { SacBaseModelControl } from '../../common/basemodelcontrol';
// import { SacFormular } from '../form/form';
import { SacValidationSummaryCommon } from '@simpleangularcontrols/sac-common';
import { SacFormDirective } from '../form/form';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';


@Component({
    selector: 'sac-validationsummary',
    templateUrl: './validationsummary.html',
    // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: SacValidationSummaryComponent
        }
    ],
    // View Provider, damit das Formular an das Control gebunden werden kann
    viewProviders: [{ provide: ControlContainer, useExisting: SacFormDirective }],
    standalone: true,
    imports: [NgIf, NgFor, AsyncPipe]
})
export class SacValidationSummaryComponent extends SacValidationSummaryCommon {

  constructor(@Host() @Optional() parent: SacFormDirective, injector: Injector) {
    super(parent, injector);
  }

}


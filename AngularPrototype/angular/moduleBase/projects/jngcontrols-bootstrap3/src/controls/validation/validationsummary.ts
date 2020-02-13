import { Component, Host, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer } from '@angular/forms';
// import { NgBaseModelControl } from '../../common/basemodelcontrol';
// import { NgFormular } from '../form/form';
import { NgValidationSummaryCommon } from '@jnetwork/jngcontrols-common';
import { NgFormularDirective } from '../form/form';


@Component({
  selector: 'ng-validationsummary,ngValidationSummary',
  templateUrl: './validationsummary.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: NgValidationSummaryComponent
    }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormularDirective }]
})
export class NgValidationSummaryComponent extends NgValidationSummaryCommon {

  constructor(@Host() parent: NgFormularDirective, injector: Injector) {
    super(parent, injector);
  }

}


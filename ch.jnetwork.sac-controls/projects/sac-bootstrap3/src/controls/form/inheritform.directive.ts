import { Directive, Injector, SkipSelf } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SacFormCommon } from '@simpleangularcontrols/sac-common';
import { SacFormDirective } from './form';

// #region Classes

/**
 * Directive to inherit an NgForm/NgForm from a parent component
 */
@Directive({
  selector: '[sacInheritForm]',
  exportAs: 'sacinheritform',
  standalone: true,
  providers: [
    {
      provide: SacFormDirective,
      useFactory: SACFORM_FACTORY,
      deps: [[new SkipSelf(), SacFormDirective]],
    },
    {
      provide: ControlContainer,
      useFactory: NGFORM_FACTORY,
      deps: [NgForm],
    },
  ],
})
export class SacInheritFormDirective extends SacFormCommon {
  // #region Constructors

  /**
   * Construtor
   * @param injector: injector to receive the NgForm instance
   */
  constructor(injector: Injector) {
    super(injector.get(NgForm));
  }

  // #endregion Constructors
}

// #endregion Classes

// #region Functions

/**
 * Factory Methode für NgForm
 * @param form NgForm
 */
export function NGFORM_FACTORY(form: NgForm) {
  return form;
}

/**
 * Factory Methode für SacForm
 * @param form NgFormular
 */
export function SACFORM_FACTORY(form: SacFormDirective) {
  return form;
}

// #endregion Functions

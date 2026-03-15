import { SacFormDirective } from './form';
import { Directive, Injector, SkipSelf } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SacFormCommon } from '@simpleangularcontrols/sac-common';

// #region Exported Functions

/**
 * Factory method for NgForm
 * @param form NgForm
 */
export function NGFORM_FACTORY(form: NgForm) {
    return form;
}

/**
 * Factory method for SacForm
 * @param form SacForm
 */
export function SACFORM_FACTORY(form: SacFormDirective) {
    return form;
}

// #endregion Exported Functions

// #region Exported Classes

/**
 * Directive to inherit an NgForm from a parent component
 */
@Directive({
    selector: '[sacInheritForm]',
    exportAs: 'sacinheritform',
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

// #endregion Exported Classes

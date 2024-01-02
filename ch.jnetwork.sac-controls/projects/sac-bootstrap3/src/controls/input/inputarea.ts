import { ControlContainer, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { SacFormDirective } from '../form/form';
import { Component, forwardRef, Host, Injector, Optional } from '@angular/core';
import { SacInputAreaCommon } from '@simpleangularcontrols/sac-common';
import { NgClass, NgIf, AsyncPipe } from '@angular/common';

/**
 * Komponente für TextArea
 *
 * @example
 *
 * <ngInputArea name="ngInputArea" label="My Label" placeholder='i am input area' [isrequired]="true" customCssClass="myClass1 myClass3"></ngInputArea>
 *
 * @example
 *
 * <ngInputArea name="ngInputArea" label="My Label" height="150px" placeholder='i am input area' [islanguagespecific]="true">
 *
 */
@Component({
    selector: 'sac-inputarea',
    templateUrl: './inputarea.html',
    // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
    providers: [
        { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: SacInputAreaComponent },
        { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => SacInputAreaComponent) }
    ],
    standalone: true,
    imports: [NgClass, NgIf, AsyncPipe]
})

export class SacInputAreaComponent extends SacInputAreaCommon {

  constructor( @Host() @Optional() parent: SacFormDirective, injector: Injector) {
    super(parent, injector);
  }

}

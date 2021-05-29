import { ControlContainer, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { NgFormularDirective } from '../form/form';
import { Component, forwardRef, Host, Injector } from '@angular/core';
import { NgInputAreaCommon } from '@jnetwork/jngcontrols-common';

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
  selector: 'ng-inputarea,ngInputArea',
  templateUrl: './inputarea.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: NgInputAreaComponent },
    { provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => NgInputAreaComponent) }
  ]
})

export class NgInputAreaComponent extends NgInputAreaCommon {

  constructor( @Host() parent: NgFormularDirective, injector: Injector) {
    super(parent, injector);
  }

}

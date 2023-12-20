import { Directive } from '@angular/core';
import { SacFormDirective } from './form';
import { SkipSelf } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ControlContainer } from '@angular/forms';

/**
 * Factory Methode für SacForm
 * @param form SacFormular
 */
export function SACFORM_FACTORY(form: SacFormDirective) {
  return form;
}

/**
 * Factory Methode für NgForm
 * @param form NgForm
 */
export function NGFORM_FACTORY(form: NgForm) {
  return form;
}

/**
 * Directive zum erben eines NgForm/NgFormular einer übergeordneten Komponente
 *
 * @example Implementation in Markup
 *
 * <div sacInheritForm>
 * </div>
 *
 * @example Model an Sub-Komponente übergeben
 *
 * <div sacInheritForm>
 * <div>SubForm</div>
 * <div>
 *  <ngInput [(ngModel)]="mymodel.fieldarea2" name="subformField3" label="field 3" [isrequired]="true"></ngInput>
 * </div>
 * </div>
 *
 *
 * (at)Component({
 * selector: 'sacInheritForm',
 * templateUrl: './subform.component.html'
 * })
 * export class SubFormComponent implements DoCheck {
 *
 * (at)Input() mymodel;
 * (at)Output() mymodelChange = new EventEmitter();
 *
 * ngDoCheck() {
 *   this.mymodelChange.next(this.mymodel);
 * }
 *}
 *
 */
@Directive({
  selector: '[sacInheritForm]',
  providers: [
    {
      provide: SacFormDirective,
      useFactory: SACFORM_FACTORY,
      deps: [[new SkipSelf(), SacFormDirective]]
    }, {
      provide: ControlContainer,
      useFactory: NGFORM_FACTORY,
      deps: [NgForm]
    }
  ]
})
export class SacInheritFormDirective { }

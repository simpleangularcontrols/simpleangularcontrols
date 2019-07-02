import { Directive } from '@angular/core';
import { NgFormular } from '../controls/form/form';
import { SkipSelf } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ControlContainer } from '@angular/forms';

/**
 * Factory Methode für NgFormular
 * 
 * @param form NgFormular
 */
export function NGFORMULAR_FACTORY(form: NgFormular) {
  return form;
}

/**
 * Factory Methode für NgForm
 * 
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
 * <div inherit-form>
 * </div>
 *
 * @example Model an Sub-Komponente übergeben
 *
 * <div inherit-form>
 * <div>SubForm</div>
 * <div>
 *  <ngInput [(ngModel)]="mymodel.fieldarea2" name="subformField3" label="field 3" [isrequired]="true"></ngInput>
 * </div>
 * </div>
 *
 *
 * (at)Component({
 * selector: 'ngSubForm',
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
  selector: '[inherit-form]',
  providers: [
    {
      provide: NgFormular,
      useFactory: NGFORMULAR_FACTORY,
      //useFactory: (form: NgFormular) => {
      //  return form;
      //},
      deps: [[new SkipSelf(), NgFormular]]
    }, {
      provide: ControlContainer,
      useFactory: NGFORM_FACTORY,
      deps: [NgForm]
    }
  ]
})
export class ProvideParentNgFormular { }

import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { mount } from '@jscutlery/cypress-angular/mount';
import { JNetworkBootstrap4FormModule } from '../form/form.module';
import { JNetworkBootstrap4CheckboxModule } from './checkbox.module';

@Component({
  template: `<form>
    <ngRadiobuttons
      name="myCheckbox"
      [(ngModel)]="value"
      [label]="text"
      [disablelabel]="textdisabled"
    >
      <ngRadiobutton
        [label]="label[0]"
        [disabled]="disabled[0]"
        [value]="itemvalue[0]"
      ></ngRadiobutton>
      <ngRadiobutton
        [label]="label[1]"
        [disabled]="disabled[1]"
        [value]="itemvalue[1]"
      ></ngRadiobutton>
    </ngRadiobuttons>
  </form>`,
})
export class NgRadiobuttonComponentTest {
  @Input()
  public label = ['Control Label', 'Control Label 2'];

  @Input()
  public textdisabled = false;

  @Input()
  public text = 'Radiobutton Test';

  @Input()
  public disabled = [false, false];

  @Input() itemvalue = [1, 2];

  private _value = 1;

  @Input()
  public set value(v) {
    this._value = v;
    this.valueChange.emit(v);
  }
  public get value() {
    return this._value;
  }

  @Output()
  public valueChange = new EventEmitter<any>();
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    JNetworkBootstrap4FormModule,
    JNetworkBootstrap4CheckboxModule,
  ],
  declarations: [NgRadiobuttonComponentTest],
  exports: [NgRadiobuttonComponentTest],
})
export class NgCheckboxModuleTest {}

function createComponentObject(inputs: any, outputs: any) {
  cy.spy(outputs, 'valueChange').as('valueChange');

  mount(NgRadiobuttonComponentTest, {
    imports: [NgCheckboxModuleTest],
    inputs: inputs,
    outputs: outputs,
    stylesheet:
      'https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css',
  });
}

describe('NgRadiobuttonComponent', () => {
  it('should show label and checkbox text', () => {
    let inputs = {};
    let outputs = { valueChange() {} };
    createComponentObject(inputs, outputs);

    cy.get('.col-form-label').should('have.text', 'Radiobutton Test');
    cy.get('label').first().should('have.text', 'Control Label');
    cy.get('label').eq(1).should('have.text', 'Control Label 2');
    cy.get('input').first().should('be.checked');
    cy.get('input').eq(1).should('not.be.checked');
    cy.get('input').eq(1).click();
    cy.wrap(outputs.valueChange).should('be.calledWith', 2);
    cy.get('input').first().click();
    cy.wrap(outputs.valueChange).should('be.calledWith', 1);
  });

  it('should be disabled', () => {
    let inputs = { disabled: [false, true] };
    let outputs = { valueChange() {} };
    createComponentObject(inputs, outputs);

    cy.get('input').first().should('be.checked');
    cy.get('input').eq(1).should('not.be.checked');
    cy.get('input').eq(1).should('be.disabled');
    cy.get('input').eq(1).click({ force: true });
    cy.wrap(outputs.valueChange).should('not.have.been.called');
  });

  it('should not show label', () => {
    let inputs = { textdisabled: true };
    let outputs = { valueChange() {} };
    createComponentObject(inputs, outputs);

    cy.get('.col-form-label').should('not.exist');
  });

  it('should be work with string values', () => {
    let inputs = { value: 'item2', itemvalue: ['item1', 'item2'] };
    let outputs = { valueChange() {} };
    createComponentObject(inputs, outputs);

    cy.get('input').eq(1).should('be.checked');
  });
});
